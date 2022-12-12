const createTicket = async () => {
    const response = await fetch('http://localhost:8080/tickets/create', {
        method: 'POST',
    })
    .then(res => res.json())
    .then(res => res.payload)
    .catch(res => res.error || {error: 'Erro ao gerar código'})
    
    return response
}