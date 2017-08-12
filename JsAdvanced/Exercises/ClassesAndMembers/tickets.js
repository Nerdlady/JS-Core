function tickets(tickets, sortCriteria) {
    class Ticket{
        constructor(destinationName,price,status){
            this.destination = destinationName;
            this.price = price;
            this.status = status;
        }

    }
    let ticketsArr = [];
    for (let ticket of tickets) {
        let currentTicket = ticket.split('|');
        ticketsArr.push(new Ticket(currentTicket[0],Number(currentTicket[1]),currentTicket[2]));
    }

    if(sortCriteria === 'destination'){
        return ticketsArr.sort((a,b) => a.destination.localeCompare(b.destination));
    }

    if(sortCriteria === 'price'){
        return ticketsArr.sort((a,b) => a.price - b.price);
    }

    if(sortCriteria === 'status'){
        return ticketsArr.sort((a,b) => a.status.localeCompare(b.status));
    }
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
