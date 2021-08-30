import { getDate } from "./common";

export interface IBlog {
    id: number,
    type: string,
    date: string,
    writer: string,
    views: number,
    likes: number,
    image: string,
    heading: string,
    content: string,
    description: string,
}

interface IBlogsPage {
    heighlight: IBlog,
    recentBlogs: IBlog[],
}

export interface ICategory {
    id: number,
    name: string,
    value: string,
}

export interface IStyled {
  image: string,
}

export const blog: IBlogsPage = {   
    heighlight: {
        id: 0,
        type: 'privacy',
        date: getDate(),
        image: "blog-laptop.png",
        writer: 'John Doe',
        views: 245,
        likes: 100,
        heading: 'Lorem ipsum dolor sit cakir loth waka omur',
        content: `Lorem ipsum dolor sit amet consedtur ipsehyu
                    ctetur, adipisicing elit. Repellendus solor seatfor
                    porro illum dolorem doloremque volante
                    Lorem ipsum dolor sit amet consedtur ipsehyu
                    ctetur, adipisicing elit. Repellendus solor seatfor
                    porro illum dolorem doloremque volante`,
        description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        
    },
    recentBlogs: [
        {
            id: 1,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            image: "blog-laptop.png",
            views: 200,
            likes: 50,
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 2,
            type: 'AI',
            date: getDate(),
            image: "blog-image.jpg",
            views: 145,
            likes: 10,
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 3,
            type: 'IP',
            date: getDate(),
            views: 345,
            likes: 200,
            image: "blog-laptop.png",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 4,
            type: 'IP',
            date: getDate(),
            views: 150,
            likes: 99,
            image: "blog-post-books.png",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
         {
            id: 5,
            type: 'IP',
            date: getDate(),
            views: 445,
            likes: 105,
            image: "blog-image.jpg",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 6,
            type: 'DP',
            views: 145,
            likes: 40,
            image: "blog-image.jpg",
            date: getDate(),
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 7,
            type: 'SL',
            date: getDate(),
            views: 175,
            likes: 50,
            image: "blog-post-books.png",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 8,
            type: 'blockchain',
            date: getDate(),
            views: 245,
            likes: 55,
            image: "blog-post-books.png",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
         {
            id: 9,
            type: 'IP',
            date: getDate(),
            views: 165,
            likes: 99,
            image: "blog-laptop.png",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
        {
            id: 10,
            type: 'contracts',
            date: getDate(),
            views: 195,
            likes: 90,
            image: "blog-image.jpg",
            writer: 'John Doe',
            heading: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                                            </p>
                                            <h3>
                                                Source list
                                            </h3>
                                            <ol>
                                                <li>
                                                    Etiam ultricies nisi vel augue
                                                </li>
                                                <li>
                                                    Curabitur ullamcorper ultricies nisie
                                                </li>
                                                <li>
                                                    Nam quam nunc, blandit vel, luctus pulvinarue
                                                </li>
                                                <li>
                                                    Aenean leo ligula, porttitoreu, consequat ltricies nisiue
                                                </li>
                                            </ol>`,
        },
    ],
}
export const categories: ICategory[] = [
    { id: 0, name: 'All', value: '' },
    { id: 1, name: 'Data Protection', value: 'DP' },
    { id: 2, name: 'Intellectual Property', value: 'IP' },
    { id: 3, name: 'Contracts', value: 'contracts' },
    { id: 4, name: 'Corporate', value: 'corporate' },
    { id: 5, name: 'Artificial Intelligence', value: 'AI' },
    { id: 6, name: 'Software Licensing', value: 'SL' },
    { id: 7, name: 'Blockchain', value: 'blockchain' },
];
export const getBlogPost = (id: number) => {
    if (blog.heighlight.id === id)
        return blog.heighlight;
    else
        return blog.recentBlogs.filter(item => item.id === id)[0];
};