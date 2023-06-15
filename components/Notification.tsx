import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const SuccesNotify = (text: string | number | null) => {
    toast.success(text, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export const ErrorNotify = (text: string | number) => {
    toast.error(text, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const Notification = ({ text }: { text?: string | number | undefined }) => {
    const  Notif = () => {
        navigator.clipboard.writeText('Active Theme')
            .then(() => {
                return SuccesNotify('');
            })
            .catch((error) => {
                ErrorNotify('')
            });
    }

    return (
        <>
            <ToastContainer></ToastContainer>
        </>
    )
}

export default Notification