export interface Customer {
    id: string,
    name: string,
    userCode: number,
    domain: string,
    phoneNumber:string,
    email: string,
    status: string 
}
export const CUSTOMERS: Customer[] =[
    {
        id: "1",
        name: "Adriana Lindgren",
        userCode: 79020,
        domain: "ted.com",
        phoneNumber: "1-654-851-4127 x65327",
        email: "Hector92@yahoo.com",
        status: "status 1"
      },
      {
        id: "2",
        name: "Milo Cremin",
        userCode: 11428,
        domain: "lester.info",
        phoneNumber: "(871) 542-8525",
        email: "Fritz.Dibbert19@hotmail.com",
        status: "status 2"
      },
      {
        id: "3",
        name: "Lyric Hand",
        userCode: 53804,
        domain: "polly.biz",
        phoneNumber: "270.826.8686 x7580",
        email: "Annette24@gmail.com",
        status: "status 3"
      },
]