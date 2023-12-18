
import path from 'path';
import { NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
const fs = require('fs');


export async function POST(req) {
  try {
    const data = await req.json()
    let {userId,title} = data
    


    const templateBytes = path.join(process.cwd(), 'public', 'certifTemp.pdf');
    const pdfByte =  fs.readFileSync(templateBytes)
   
    const pdfDoc = await PDFDocument.load(pdfByte);

    const pages = pdfDoc.getPage(0);

    
    pages.drawText(`  ${userId}`, { x: 300, y: 315, color: rgb(0, 0, 0) });
    
    const uri = await pdfDoc.saveAsBase64({dataUri:true})

    return NextResponse.json({uri})
  } catch (error) {
    console.error('Error generating certificate:', error);
   return NextResponse.json({mssg : 'Error While Creating The Certificate'})
  }
}
