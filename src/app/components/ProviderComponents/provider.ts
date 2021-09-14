export interface Provider {
    ProviderId: number,
    CompanyTitle: string,
    CompanyDescription: string|null,
    CompanyPhoto: string,
    Phone: string,
    WebSite: string,
    Email: string,
    Location:Location,       
    Marbles:Marble[],
    BusinessTypes:BusinessType[]
    SelectedMarbles:number[],
    SelectedBTypes :number[],
    HelperBusinessTypes: number[],
    HelperMarbles:number[]
}

export interface Location{
    LocationId?:number,
    Country: string,
    City: string,
    Address: string,
    Lat:number,
    Lng:number
}

export interface Marble{
    MarbleId:number, 
    Name: string 
}

export interface BusinessType{
    BusinessTypeId:number, 
    Kind:string
}
