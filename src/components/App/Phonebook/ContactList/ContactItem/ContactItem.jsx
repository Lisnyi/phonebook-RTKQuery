import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button } from "components/App/App.styled"
import { ContactElement } from "../ContactList.styled"
import { useRemoveContactMutation } from "redux/contacts/contacts-api"

export const ContactItem = ({id, number, name}) => {
    const [removeContact, {isLoading}] = useRemoveContactMutation()

    const deleteContact = async (id, name) => {
        await removeContact(id)
        Notify.success(`${name} successfully deleted`)
    }

    return  <ContactElement key={id}>
                {name}: {number}
                <Button onClick={() => deleteContact(id, name)} disabled={isLoading}>{isLoading ? "Deleting..." : "Delete"}</Button>
            </ContactElement>
} 