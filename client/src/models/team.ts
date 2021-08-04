export const ourTeam = [
    {
        name: 'John Doe',
        id: 1,
        imgURL: '/team-john.png',
        title: 'Legal Consultant',
        Description: `<p>
                                There are many variations of passages of Lorem Ipsume available, but the majority.
                                Many museu are transforming thanks to echnology. They are adding beyaz engin
                                interactivity and magic to the visitorer experience. Estimote lorem ispum dolor
                                Beacons have helped the Guggenheim in New York to be at the forefront of rok
                                this process. The club uses Estimote Beacons to transform the in-stadium experience
                                for its guests.
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsume available, but the majority.
                                Many museu are transforming thanks to echnology. They are adding beyaz engin
                                interactivity and magic to the visitorer experience.
                            </p>
                            <h4>
                                Education
                            </h4>
                            <ul>
                                <li>
                                    <h5>
                                        The Academy of Public Administration, Azerbaijan
                                    </h5>
                                    <p>
                                        Bachelor of Jurisprudence (LLB)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        University of Lausanne, Switzerland
                                    </h5>
                                    <p>
                                        Advanced Masters in Intrenational Commercial Law (LL.M.)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        The Academy of Public Administration, Azerbaijan
                                    </h5>
                                    <p>
                                        Bachelor of Jurisprudence (LLB)
                                    </p>
                                </li>
                            </ul>`,
    },
    {
        name: 'Jane Doe',
        id: 2,
        imgURL: '/team-jane.png',
        title: 'Legal Consultant',
        Description: `<p>
                                There are many variations of passages of Lorem Ipsume available, but the majority.
                                Many museu are transforming thanks to echnology. They are adding beyaz engin
                                interactivity and magic to the visitorer experience. Estimote lorem ispum dolor
                                Beacons have helped the Guggenheim in New York to be at the forefront of rok
                                this process. The club uses Estimote Beacons to transform the in-stadium experience
                                for its guests.
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsume available, but the majority.
                                Many museu are transforming thanks to echnology. They are adding beyaz engin
                                interactivity and magic to the visitorer experience.
                            </p>
                            <h4>
                                Education
                            </h4>
                            <ul>
                                <li>
                                    <h5>
                                        The Academy of Public Administration, Azerbaijan
                                    </h5>
                                    <p>
                                        Bachelor of Jurisprudence (LLB)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        University of Lausanne, Switzerland
                                    </h5>
                                    <p>
                                        Advanced Masters in Intrenational Commercial Law (LL.M.)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        University of Montreal, Canada
                                    </h5>
                                    <p>
                                        PhD in Innovation, Science, Technology and Law
                                    </p>
                                </li>
                            </ul>`,
    },
    {
        name: 'Hector Doe',
        id: 3,
        imgURL: '/team-hector.png',
        title: 'Legal Consultant',
        Description: `<p>
                                There are many variations of passages of Lorem Ipsume available, but the majority.
                                Many museu are transforming thanks to echnology. They are adding beyaz engin
                                interactivity and magic to the visitorer experience. Estimote lorem ispum dolor
                                Beacons have helped the Guggenheim in New York to be at the forefront of rok
                                this process. The club uses Estimote Beacons to transform the in-stadium experience
                                for its guests.
                            </p>
                            <p>
                                There are many variations of passages of Lorem Ipsume available, but the majority.
                                Many museu are transforming thanks to echnology. They are adding beyaz engin
                                interactivity and magic to the visitorer experience.
                            </p>
                            <h4>
                                Education
                            </h4>
                            <ul>
                                <li>
                                    <h5>
                                        The Academy of Public Administration, Azerbaijan
                                    </h5>
                                    <p>
                                        Bachelor of Jurisprudence (LLB)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        University of Lausanne, Switzerland
                                    </h5>
                                    <p>
                                        Advanced Masters in Intrenational Commercial Law (LL.M.)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        University of Tartu, Estonia
                                    </h5>
                                    <p>
                                        Master of Arts in Law in Information Technology Law (MA)
                                    </p>
                                </li>
                                <li>
                                    <h5>
                                        University of Montreal, Canada
                                    </h5>
                                    <p>
                                        PhD in Innovation, Science, Technology and Law
                                    </p>
                                </li>
                            </ul>`,
    },
];
export const getMember = (id: number) => {
    return ourTeam.filter(member => member.id === id)[0];
}