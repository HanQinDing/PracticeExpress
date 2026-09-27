export interface GetEmployeeDTO{
    name:string;
    age: string;
}


export interface GetAllEmployeeDTO{
    allEmployees : GetEmployeeDTO[];
    
};


export interface GetAllEmployeeQuery{
    age: number;
};


export interface GetAllEmployeeParams{
    employeeID: number;
};
