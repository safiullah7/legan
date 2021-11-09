import { getDate } from "./common";

export interface IBlog {
    _id:  number | string,
    type: string,
    date: string,
    writer: string,
    views: number,
    likes: number,
    imageUrl: string,
    title: string,
    content: string,
    description: string,
}

export interface IAddBlog {
    type: string,
    date: string,
    writer: string,
    title: string,
    content: string,
    description: string,
}

interface IBlogsPage {
    heighlight: IBlog,
    recentBlogs: IBlog[],
}

export interface ICategory {
    _id: number,
    name: string,
    value: string,
}

export interface IStyled {
  imageUrl: string,
}

export const blog: IBlogsPage = {   
    heighlight: {
        _id: 0,
        type: 'privacy',
        date: getDate(),
        imageUrl: "blog-laptop.png",
        writer: 'John Doe',
        views: 245,
        likes: 100,
        title: 'Lorem ipsum dolor sit cakir loth waka omur',
        content: `Lorem ipsum dolor sit amet consedtur ipsehyu
                    ctetur, adipisicing elit. Repellendus solor seatfor
                    porro illum dolorem doloremque volante
                    Lorem ipsum dolor sit amet consedtur ipsehyu
                    ctetur, adipisicing elit. Repellendus solor seatfor
                    porro illum dolorem doloremque volante`,
        description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 1,
            type: 'IP',
            date: getDate(),
            writer: 'John Doe',
            imageUrl: "blog-laptop.png",
            views: 200,
            likes: 50,
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 2,
            type: 'AI',
            date: getDate(),
            imageUrl: "blog-image.jpg",
            views: 145,
            likes: 10,
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 3,
            type: 'IP',
            date: getDate(),
            views: 345,
            likes: 200,
            imageUrl: "blog-laptop.png",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 4,
            type: 'IP',
            date: getDate(),
            views: 150,
            likes: 99,
            imageUrl: "blog-post-books.png",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 5,
            type: 'IP',
            date: getDate(),
            views: 445,
            likes: 105,
            imageUrl: "blog-imageUrl.jpg",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 6,
            type: 'DP',
            views: 145,
            likes: 40,
            imageUrl: "blog-image.jpg",
            date: getDate(),
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 7,
            type: 'SL',
            date: getDate(),
            views: 175,
            likes: 50,
            imageUrl: "blog-post-books.png",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 8,
            type: 'blockchain',
            date: getDate(),
            views: 245,
            likes: 55,
            imageUrl: "blog-post-books.png",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 9,
            type: 'IP',
            date: getDate(),
            views: 165,
            likes: 99,
            imageUrl: "blog-laptop.png",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
            _id: 10,
            type: 'contracts',
            date: getDate(),
            views: 195,
            likes: 90,
            imageUrl: "blog-image.jpg",
            writer: 'John Doe',
            title: 'Lorem ipsum dolor sit cakir loth waka omur',
            content: `Lorem ipsum dolor sit amet consedtur ipsehyu ctetur, adipisicing elit. Repellendus solor seatfor porro illum dolorem loremque`,
            description: `<p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt. Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <h3>
                                                Donec quam felis
                                            </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dictum felis eu pede mollis pretium. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                                Aenean commodo ligula eget dolor. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Integer tincidunt.
                                                Cras dapibus. Aenean vulputate eleifend tellus. Vivamus elementum semper nisi. Aenean leo ligula, porttitoreu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit _id, lorem.
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
    { _id: 0, name: 'All', value: '' },
    { _id: 1, name: 'Data Protection', value: 'DP' },
    { _id: 2, name: 'Intellectual Property', value: 'IP' },
    { _id: 3, name: 'Contracts', value: 'contracts' },
    { _id: 4, name: 'Corporate', value: 'corporate' },
    { _id: 5, name: 'Artificial Intelligence', value: 'AI' },
    { _id: 6, name: 'Software Licensing', value: 'SL' },
    { _id: 7, name: 'Blockchain', value: 'blockchain' },
];