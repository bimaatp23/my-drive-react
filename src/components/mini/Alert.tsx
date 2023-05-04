import Swal from "sweetalert2"

export function Alert(type: 'success' | 'error', title: string, message: string) {
    Swal.fire({
        title: title,
        text: message,
        icon: type,
        timer: 2000,
        showConfirmButton: false
    })
}