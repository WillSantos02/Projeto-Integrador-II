const searchBtn = document.querySelector('.search-btn');
const tableUsage = document.getElementById('tableUsage');
const inputCode = document.getElementById('ticketCode');
const msg = document.getElementById('msg');

searchBtn.addEventListener('click', async () => {
    const tableItem = document.querySelectorAll('.tableItem');

    msg.innerHTML = '';

    tableItem.forEach(item => {
        item.remove()
    });

    if (inputCode.value.length) {
        const logs = await fetch('http://localhost:8080/recharges/list/usage', {
            method: "GET",
            headers: {
                ticket: inputCode.value
            }
        })
        .then(res => res.json())
        .then(res => res)

        if (logs.status == 'success') {
            logs.payload.forEach(recharge => {
                const thead = document.createElement('thead');
                thead.classList.add('tableItem')
                const trThead = document.createElement('tr');
                thead.appendChild(trThead)
                const thRecId = document.createElement('th');
                const thRecTipo = document.createElement('th');
                const thRecData = document.createElement('th');
                const thRecEstado = document.createElement('th');
                thRecId.innerHTML = 'Recarga';
                thRecTipo.innerHTML = 'Tipo';
                thRecData.innerHTML = 'Data';
                thRecEstado.innerHTML = 'Estado';
                trThead.appendChild(thRecId);
                trThead.appendChild(thRecTipo);
                trThead.appendChild(thRecData);
                trThead.appendChild(thRecEstado);
                tableUsage.appendChild(thead)
                
                const tBody = document.createElement('tbody');
                tBody.classList.add('tableItem')
                const trBody = document.createElement('tr');
                thead.appendChild(trBody)
                const tdRecId = document.createElement('td');
                const tdRecTipo = document.createElement('td');
                const tdRecData = document.createElement('td');
                const tdRecEstado = document.createElement('td');
                tdRecId.innerHTML = recharge.RECHARGE_ID;
                tdRecTipo.innerHTML = recharge.TYPE;
                const tdRecDataDate = new Date(recharge.CREATED_AT)
                tdRecData.innerHTML = `${tdRecDataDate.getDay() < 10 ? '0' + tdRecDataDate.getDay() : tdRecDataDate.getDay()}/${tdRecDataDate.getMonth() < 10 ? '0' + tdRecDataDate.getMonth() : tdRecDataDate.getMonth()}/${tdRecDataDate.getFullYear()}`;
                tdRecEstado.innerHTML = recharge.STATE;
                trBody.appendChild(tdRecId);
                trBody.appendChild(tdRecTipo);
                trBody.appendChild(tdRecData);
                trBody.appendChild(tdRecEstado);
                tableUsage.appendChild(tBody)

                if (recharge.TRANSACTIONS.length) {
                    const thead = document.createElement('thead');
                    thead.classList.add('tableItem')
                    const trThead = document.createElement('tr');
                    thead.appendChild(trThead)
                    const thUsageId = document.createElement('th');
                    const thUsagePlace = document.createElement('th');
                    const thUsageMethod = document.createElement('th');
                    const thUsageData = document.createElement('th');
                    thUsageId.innerHTML = 'Utilização';
                    thUsagePlace.innerHTML = 'Local';
                    thUsageMethod.innerHTML = 'Meio';
                    thUsageData.innerHTML = 'Data';
                    trThead.appendChild(thUsageId);
                    trThead.appendChild(thUsagePlace);
                    trThead.appendChild(thUsageMethod);
                    trThead.appendChild(thUsageData);
                    tableUsage.appendChild(thead);

                    recharge.TRANSACTIONS.forEach(usage => {
                        const tBody = document.createElement('tbody');
                        tBody.classList.add('tableItem')
                        const trBody = document.createElement('tr');
                        thead.appendChild(trBody)
                        const tdUsageId = document.createElement('td');
                        const tdUsagePlace = document.createElement('td');
                        const tdUsageMethod = document.createElement('td');
                        const tdUsageData = document.createElement('td');
                        tdUsageId.innerHTML = usage.TRANSACTION_ID;
                        tdUsagePlace.innerHTML = usage.PLACE;
                        const tdUsageDataDate = new Date(usage.CREATED_AT)
                        tdUsageMethod.innerHTML = usage.METHOD;
                        tdUsageData.innerHTML = `${tdUsageDataDate.getDay() < 10 ? '0' + tdUsageDataDate.getDay() : tdUsageDataDate.getDay()}/${tdUsageDataDate.getMonth() < 10 ? '0' + tdUsageDataDate.getMonth() : tdUsageDataDate.getMonth()}/${tdUsageDataDate.getFullYear()}`;
                        trBody.appendChild(tdUsageId);
                        trBody.appendChild(tdUsagePlace);
                        trBody.appendChild(tdUsageMethod);
                        trBody.appendChild(tdUsageData);
                        tableUsage.appendChild(tBody);
                    })
                }
            })




        } else {
            msg.innerHTML = 'Bilhete inválido ou não tem recargas';
        }
    } else {
        msg.innerHTML = 'Bilhete inválido ou não tem recargas';
    }
})