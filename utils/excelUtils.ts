// we have to write the logic for excel scenarios

import xlsx from 'xlsx'

export class ExcelUtils{
    // which excel file you need to read -- filepath
    // which sheet from the excel you need to read -- sheet name

    static getExcelData(filepath:string,sheetname:string){
        // this logic must be wright in try catch block
    try{
        // readFile method present inside the excel to read the file
        // and it will return the value in workbook format.
        // workbook format is nothing but having sheetname and value
        const wb = xlsx.readFile(filepath)
        const sheet = wb.Sheets[sheetname]
        const data = xlsx.utils.sheet_to_json(sheet)
        return data

    }
    catch(error){
        console.log(error);
    }


    }

}
















