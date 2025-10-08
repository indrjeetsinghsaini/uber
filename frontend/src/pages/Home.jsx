socket?.on('ride-confirmed', ride => {
    setVehicleFound(false)
    setWaitingForDriver(true)
    setRide(ride)
})

socket?.on('ride-started', ride => {
    setWaitingForDriver(false)
    navigate('/riding', { state: { ride } })
})
