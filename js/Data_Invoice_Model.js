// Data_Invoice_Model.js
//index

const { createInvoice } = require('./Member_Weekly_Invoice.js');

const invoice = {
    shipping: {
        name: 'Jane Doe',
        address: '69420 Mind Goblin Av.',
        city: 'The Worst City',
        state: 'CA',
        country: 'US',
        postal_code: 94111,
    },
    items: [
        {
            item: 'TC 100',
            description: 'Toner Cartridge',
            quantity: 2,
            amount: 6000,
        },
        {
            item: 'USB_EXT',
            description: 'USB Cable Extender',
            quantity: 1,
            amount: 2000,
        },
    ],
    subtotal: 8000,
    paid: 0,
    invoice_nr: 1234,
};

createInvoice(invoice, 'invoice.pdf');