//This pop up holds a and b buttons which will satisfy the Manager requirement for objectives 7 and 8

// OBJECTIVE No. 7: (Manager Requested) Generate Provider Weekly Payment Report (10%)
// OBJECTIVE No. 8: (Manager Requested) Generate Individual Member Weekly Invoice (10%)

// clicking on button c will create new pop up for objective 10

// OBJECTIVE No. 10: Scheduled Reports (10%)
/// Print daily service report
/// Print weekly service report
/// Print monthly service report
/// Print daily memberships as Acme updates at 9PM

import * as ReactDOM from "@react-pdf/renderer";

const easyinvoice = require("easyinvoice");
const fs = require("fs");
const Type_of_Report = {};

Type_of_Report.call = () => {
    bootbox.dialog({
        title: 'Welcome to the Manager and Operator Dashboard',
        message: '<p> Which type of Report do you want to request? </p>',
        size: 'large',
        onEscape: true,
        backdrop: true,
        buttons: {
            a: {
                label: 'WEEKLY INVOICE OF MEMBER ACCOUNT',
                inputType: 'date',
                className: 'btn-primary',
                callback: () => {
                    import React from 'react';
                    import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

                    const styles = StyleSheet.create({
                        page: {
                            flexDirection: 'row',
                        },
                        section: {
                            flexGrow: 1,
                        },
                    });

                    const MyDocument = (
                        <Document>
                            <Page size="A4" style={styles.page}>
                                <View style={styles.section}>
                                    <Text>Hello World!</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text>We're inside a PDF!</Text>
                                </View>
                            </Page>
                        </Document>
                    );

                    ReactDOM.render(
                        <PDFViewer>{MyDocument}</PDFViewer>,
                        document.getElementById('root'),
                    );
                },
            },
            b: {
                label: 'WEEKLY REPORT OF PROVIDER PAYMENT',
                className: 'btn-info',
                callback: () => {

                }
            },
            c: {
                label: 'SCHEDULED REPORTS',
                className: 'btn-success',
                callback: () => {
                    Scheduled_Reports.call()

                }
            },
        }
    })
}