import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.component.html',
  styleUrls: ['./uploadphoto.component.css']
})
export class UploadphotoComponent implements OnInit, OnChanges {

  public message!: any;
  public progress!: number;
  public files!: FileList;
  @Input() photoUrl!:any;
  hasFile: boolean = false;
  fileName!: string
  @Output() public onUploadFinished = new EventEmitter();
  
  
 
  constructor(private uploadService: HttpClient,private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document) { }
 
  ngOnInit(): void {
    this.takeFile();
  }
 
  ngOnChanges():void{
    this.hasFile = true;
    this.fileName = this.photoUrl
  }
 
  public uploadFile = (files: FileList) => {
    
    if (files.length === 0) {
      return;
    }
 
    let fileToUpload = <File>files[0];
 
    if ((fileToUpload.type === 'image/jpeg' ||
      fileToUpload.type === 'image/png' ||
      fileToUpload.type === 'image/jpg')) {
      
        if(fileToUpload.size < 5566360){        
          
          this.fileName = fileToUpload.name;          
          const formData = new FormData();
          formData.append('image', fileToUpload, "/Content/images/ProviderPhotos/"+fileToUpload.name);
          this.hasFile = true;

          console.log(fileToUpload); 
          console.log(this.fileName);

          this.uploadService.post('https://localhost:44399/api/providers/UploadProviderPhotos', formData, {headers: new HttpHeaders({ 'content-Type': 'application/json' }), reportProgress: true, observe: 'events'})
            .subscribe(event => {
              console.log('kanei post');
              
              if (event.type === HttpEventType.UploadProgress){
                console.log(event);
                console.log(event.type);
                console.log('HttpEventType.UploadProgress');
                this.progress = Math.round(100 * event.loaded / event.total!);
                console.log(this.progress);
              }                
              else if (event.type === HttpEventType.Response) {
                console.log(event.type);
                console.log('HttpEventType.Response');
                this.message = 'Upload success.';
                this.onUploadFinished.emit(fileToUpload.name);
              }
            }); 
        }    
    }
    return;
  }

  takeFile(){
    
    let script= this._renderer2.createElement('script');
    script.text = `{$('.form_gallery-upload').on('change', function() {
      var length = $(this).get(0).files.length;


      console.log('!!!!!!!!!!!!!!poio einai to gallery label !!!!!!!!!!!!!!!!!!!!')    
      
      var galleryLabel  = $(this).attr('data-name');
      
      console.log($(this));
      console.log(galleryLabel);

      if( length > 1 ){        
        $(galleryLabel).text(length + " files selected");    
      } else {
        console.log('eimai sto else')

        $(galleryLabel).text($(this)[0].files[0].name);
        
        
      }
    });}`;
    

    this._renderer2.appendChild(this._document.body,script);
  }

}
