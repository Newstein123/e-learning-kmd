import { usePage, useForm } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea,
} from "@heroui/react";

const EnrollmentModal = ({ isOpen, onOpenChange, course }) => {
    const { auth } = usePage().props;
    const { data, setData, post, errors, progress, clearErrors, reset } =
        useForm({
            course_id: course.id,
            user_id: auth.user?.id,
            name: auth.user?.name,
            email: auth.user?.email,
            phone: "",
            payment_proof: null,
            note: "",
        });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("enroll.course"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Course enrolled successfully");
                onOpenChange();
            },
            onError: (errors) => {
                console.log(errors);
            },
        });
    };
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <form onSubmit={handleSubmit}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Enrollment Form
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    label="Contact Name"
                                    labelPlacement="outside"
                                    placeholder="Contact Name"
                                    value={data.name}
                                    onChange={(e) => {
                                        setData("name", e.target.value);
                                        clearErrors("name");
                                    }}
                                    errorMessage={errors.name}
                                    isInvalid={errors.name}
                                    required
                                />
                                <Input
                                    label="Contact Email"
                                    labelPlacement="outside"
                                    placeholder="Contact Email"
                                    value={data.email}
                                    onChange={(e) => {
                                        setData("email", e.target.value);
                                        clearErrors("email");
                                    }}
                                    errorMessage={errors.email}
                                    isInvalid={errors.email}
                                    required
                                />
                                <Input
                                    label="Contact Number"
                                    labelPlacement="outside"
                                    placeholder="Contact Number"
                                    value={data.phone}
                                    onChange={(e) => {
                                        setData("phone", e.target.value);
                                        clearErrors("phone");
                                    }}
                                    errorMessage={errors.phone}
                                    isInvalid={errors.phone}
                                    required
                                />
                                <Input
                                    type="file"
                                    label="Payment Proof"
                                    labelPlacement="outside"
                                    placeholder="Payment Proof"
                                    description="Upload your payment proof"
                                    required
                                    onChange={(e) => {
                                        setData(
                                            "payment_proof",
                                            e.target.files[0]
                                        );
                                        clearErrors("payment_proof");
                                    }}
                                    errorMessage={errors.payment_proof}
                                    isInvalid={errors.payment_proof}
                                />
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}

                                <Textarea
                                    label="Note"
                                    labelPlacement="outside"
                                    placeholder="Note"
                                    value={data.note}
                                    onChange={(e) => {
                                        setData("note", e.target.value);
                                        clearErrors("note");
                                    }}
                                    errorMessage={errors.note}
                                    isInvalid={errors.note}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" type="submit">
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </form>
        </Modal>
    );
};

export default EnrollmentModal;
