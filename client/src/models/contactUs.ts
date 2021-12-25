export const contactContent = `     <h3>
                                HELP US UNDERSTAND<br />WHAT YOU NEED.
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus Lorem ipsum dolor sit
                                porro illum dolorem doloremque voluptas
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus Lorem ipsum
                            </p>
                            <p>
                                + &nbsp;&nbsp;&nbsp; Repellendus Lorem ipsum
                            </p>
                            <p>
                                + &nbsp;&nbsp;&nbsp; +9058748365
                            </p>`;

export interface ContactUsQuery {
    name: string,
    surname: string,
    email: string,
    message: string
}

export interface IContactUs {
    _id: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}