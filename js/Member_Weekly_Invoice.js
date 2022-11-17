const Member_Weekly_Invoice = {};

const MemberAccountNumber = 12319998;
const DateOfReportRequest = 20010714;

//add conditional so that the pdf is only generated once certain things are entered
Member_Weekly_Invoice.call = () => {
    bootbox.prompt({
        size: "large",
        title: "PLEASE ENTER THE ACCOUNT NUMBER OF THE DESIRED MEMBER REPORT",
        onEscape: true,
        backdrop: true,
        callback: function (result) {
            /* result = String containing user input if OK clicked or null if Cancel clicked */
            if (result === MemberAccountNumber) {


                Member_Weekly_Invoice.call = () => {
                    bootbox.prompt({
                        size: "large",
                        inputType: 'date',
                        title: "PLEASE ENTER THE DATE FOR THE REQUESTED WEEKLY INVOICE",
                        callback: function (result) {
                            /* result = String containing user input if OK clicked or null if Cancel clicked */
                            console.log(result);
                            if (result === DateOfReportRequest) {


                                const fs = require('fs');
                                const PDFDocument = require('pdfkit');

                                function createInvoice(invoice, path) {
                                    let doc = new PDFDocument({ margin: 50 });

                                    generateHeader(doc); // Invoke `generateHeader` function.
                                    generateFooter(doc); // Invoke `generateFooter` function.

                                    doc.end();
                                    doc.pipe(fs.createWriteStream(path));
                                }

                                module.exports = {
                                    createInvoice,
                                };

                                function generateHeader(doc) {
                                    doc.image('logo.png', 50, 45, { width: 50 })
                                        .fillColor('#444444')
                                        .fontSize(20)
                                        .text('ACME Inc.', 110, 57)
                                        .fontSize(10)
                                        .text('123 Main Street', 200, 65, { align: 'right' })
                                        .text('New York, NY, 10025', 200, 80, { align: 'right' })
                                        .moveDown();
                                }

                                function generateCustomerInformation(doc, invoice) {
                                    const shipping = invoice.shipping;

                                    doc.text(`Invoice Number: ${invoice.invoice_nr}`, 50, 200)
                                        .text(`Invoice Date: ${new Date()}`, 50, 215)
                                        .text(`Balance Due: ${invoice.subtotal - invoice.paid}`, 50, 130)

                                        .text(shipping.name, 300, 200)
                                        .text(shipping.address, 300, 215)
                                        .text(
                                            `${shipping.city}, ${shipping.state}, ${shipping.country}`,
                                            300,
                                            130,
                                        )
                                        .moveDown();
                                }

                                function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
                                    doc.fontSize(10)
                                        .text(c1, 50, y)
                                        .text(c2, 150, y)
                                        .text(c3, 280, y, { width: 90, align: 'right' })
                                        .text(c4, 370, y, { width: 90, align: 'right' })
                                        .text(c5, 0, y, { align: 'right' });
                                }

                                function generateInvoiceTable(doc, invoice) {
                                    let i,
                                        invoiceTableTop = 330;

                                    for (i = 0; i < invoice.items.length; i++) {
                                        const item = invoice.items[i];
                                        const position = invoiceTableTop + (i + 1) * 30;
                                        generateTableRow(
                                            doc,
                                            position,
                                            item.item,
                                            item.description,
                                            item.amount / item.quantity,
                                            item.quantity,
                                            item.amount,
                                        );
                                    }
                                }

                                function generateFooter(doc) {
                                    doc.fontSize(
                                        10,
                                    ).text(
                                        'Payment is due within 15 days. Thank you for your business.',
                                        50,
                                        780,
                                        { align: 'center', width: 500 },
                                    );
                                }
                            }
                        }
                    });
                }
            }
        }
    });
}