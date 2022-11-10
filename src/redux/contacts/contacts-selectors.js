export const getIsLoading = store => store.contacts.isLoading
export const getError = store => store.contacts.error
export const getContacts = store => {
    const contacts = [...store.contacts.items]
    const sortedList = contacts.sort((a, b) => a.name.localeCompare(b.name));

    return sortedList
}

export const getFilteredContacts = store => {
    const {filter} = store
    const contacts = getContacts(store)

    if (!filter) {
        return contacts
    }

    const normalizedFilter = filter.toLocaleLowerCase()
    const filteredContacts = contacts.filter(({name}) => {
        const normalizedName = name.toLocaleLowerCase()
        const result = normalizedName.includes(normalizedFilter)
        return result;
    })

    return filteredContacts;
}