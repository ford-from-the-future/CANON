// Retrieve the database
/*var db = JSON.parse(localStorage.getItem("db"));
$( document ).ready( () => {
    $('#welcome').text('Welcome to the Member Dashboard, '+ db.currentUser.name.split()[0]);
});
*/
var member_dashboard = {}
member_dashboard.call = () => {
    bootbox.dialog({ 
        // The Title
        title: 'Welcome to the Member Dashboard, '+db.currentUser.getName(),
        // The Message, but reall you could put any html you want here
        message: '<p>You stupid fat bitch, you love chocolate don\'t you?</p>',
        size: 'large',
        onEscape: true,
        backdrop: true,
        buttons: {
            a: {
                label: 'Edit Account',
                className: 'btn-primary',
                callback: () => {
                                    
                }
            },
            b: {
                label: 'Book a Service',
                className: 'btn-info',
                callback: () => {
                                    
                }
            },
            c: {
                label: 'pee',
                className: 'btn-success',
                callback: () => {
                                    
                }
            },
            d: {
                label: 'poo',
                className: 'btn-danger',
                callback: () => {
                                    
                }
            }
        }
    })
}