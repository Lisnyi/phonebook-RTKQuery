export const getContacts = store => store.contacts.contacts

export const getFilteredContacts = ({filter, contacts}) => {
    if (!filter) {
        return contacts.contacts
    }

    const normalizedFilter = filter.toLocaleLowerCase()
    const filteredContacts = contacts.contacts.filter(({name}) => {
        const normalizedName = name.toLocaleLowerCase()
        const result = normalizedName.includes(normalizedFilter)
        return result;
    })

    return filteredContacts;
}