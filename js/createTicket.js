const createTicket = async () => {
    return await fetch('http://localhost:8080/tickets/create', {
        method: 'POST',
    })
    .then(res => res.json())
    .then(res => res)
    .catch(res => res.error || {error: 'Erro ao gerar código'})
}