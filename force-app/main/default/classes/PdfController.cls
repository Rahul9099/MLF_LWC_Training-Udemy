/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 05-07-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/

public with sharing class PdfController {

    @AuraEnabled
    public static Attachment generatePdf(String contentHtml,Id recordId) {
        Pagereference pg = Page.renderAsPDF;
        pg.getParameters().put('pdfText', contentHtml);
        Contact con = new Contact();
        con.id = recordId;
        Attachment ath = new Attachment();
        ath.Name = 'pdfDemo.pdf';
        ath.parentId = con.id;
        ath.Body = pg.getContentaspdf();
        ath.isPrivate = false;
        insert ath;
        return ath;

    }
}