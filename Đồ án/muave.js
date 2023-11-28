const availableSeats = document.querySelectorAll('.grid-item:not(.skip)')
const selectedSeatsHolder = document.querySelector('.seat')
const bookBtn = document.querySelector('.button-thanhtoan')

// Toggle selected state
availableSeats.forEach((seat) => {
    seat.innerText = seat.dataset.column

    seat.addEventListener('click', function () {
        if (this.classList.contains('booked')) return

        seat.classList.toggle('selected')
        showSelectedSeats()
    })
})

// Book seats
bookBtn.addEventListener('click', function () {
    const selectedSeats = document.querySelectorAll(
        '.grid-item.selected:not(.booked)'
    )
    selectedSeats.forEach((seat) => seat.classList.add('booked'))
    showSelectedSeats()
})

const showSelectedSeats = () => {
    let selectedSeatsHTML = ''
    let singleSeats = 0
    let coupleSeats = 0

    const selectedSeats = document.querySelectorAll(
        '.grid-item.selected:not(.booked)'
    )

    // Render selected seats in form
    selectedSeats.forEach((seat) => {
        selectedSeatsHTML += `<div class="seat-item"><span>${
            seat.dataset.row + seat.dataset.column
        }</span></div>`
    
        if (seat.dataset.couple === '1') {
            coupleSeats += 1
        } else {
            singleSeats += 1
        }
    })

    selectedSeatsHolder.innerHTML = selectedSeatsHTML
    console.log(`
        Single seats: ${singleSeats}
        Couple seats: ${coupleSeats}
    `)
}