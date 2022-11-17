// Each button corresponds to a task of OBJECTIVE 10

// OBJECTIVE No. 10: Scheduled Reports (10%)
/// Print daily service report
/// Print weekly service report
/// Print monthly service report
/// Print daily memberships as Acme updates at 9PM

// Clicking on each button should generate a PDF with fixed data already prepared

// Button D should print out a PDF with usernames and user data from the initializer.js file

var Scheduled_Reports = {}

Scheduled_Reports.call = () => {
    bootbox.dialog({
        title: 'Welcome to the Manager and Operator Dashboard',
        message: '<p> Which type of Report do you want to request? </p>',
        size: 'large',
        onEscape: true,
        backdrop: true,
        buttons: {
            a: {
                label: 'PRINT DAILY SERVICE REPORT',
                className: 'btn-primary',
                callback: () => {

                }
            },
            b: {
                label: 'PRINT WEEKLY SERVICE REPORT',
                className: 'btn-info',
                callback: () => {

                }
            },
            c: {
                label: 'PRINT MONTHLY SERVICE REPORT',
                className: 'btn-success',
                callback: () => {

                }
            },

            d: {
                label: 'PRINT DAILY MEMBERSHIPS AS OF 9:00 PM TODAY',
                className: 'btn-success',
                callback: () => {

                }
            },
        }
    })
}