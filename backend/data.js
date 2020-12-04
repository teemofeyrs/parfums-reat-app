import bcrypt from "bcrypt";

const data = {
    users : [
        {
            name:'Artem',
            email: 'artem.shmatchenko.dev@gmail.com',
            password: bcrypt.hashSync('Artem12447122', 8),
            isAdmin: true
        },
        {
            name:'Alina',
            email: 'alinatovstokor.dev@gmail.com',
            password: bcrypt.hashSync('Artem15061989', 8),
            isAdmin: false
        },
        {
            name:'Natalia',
            email: 'tovstokornatalia.dev@gmail.com',
            password: bcrypt.hashSync('Filip2007', 8),
            isAdmin: true
        }
    ],
    parfums : [
        {
            _id: 1,
            name: 'Original  Armani Si edp 100ml W ',
            shotName: 'Armani Si edp',
            brand: 'Armani',
            image: '/img/parfums/Original_Armani_Si_edp_100ml_W.jpg',
            sex: 'female',
            size: 100,
            price: 15,
            description: 'Original  Armani Si edp 100ml W ',
            rating: 4.0
        },
        {
            _id: 2,
            name: 'Тестер Armani Acqua Di Gio (100/M/edt)',
            shotName: 'Armani Acqua Di Gio',
            brand: 'Armani',
            image: '/img/parfums/Tester_Armani_Acqua_Di_Gio_100_M_edt.jpg',
            sex: 'male',
            size: 100,
            price: 12,
            description: 'Armani Acqua Di Gio (100/M/edt) ',
            rating: 4.8
        },
        {
            _id: 3,
            name: 'Тестер Azzaro Chrome (100/M/EDT)',
            shotName: 'Azzaro Chrome',
            brand: 'Azzaro',
            image: '/img/parfums/tester_Azzaro_Chrome_100_M_EDT.jpg',
            sex: 'male',
            size: 100,
            price: 11.50,
            description: 'Azzaro Chrome (100/M/EDT)',
            rating: 3.3
        },
        {
            _id: 4,
            name: 'Тестер Azzaro Mademoiselle Leau Tres Belle  (90/W/EDT)',
            shotName: 'Azzaro Mademoiselle Leau',
            brand: 'Azzaro',
            image: '/img/parfums/Tester_Azzaro_Mademoiselle_Leau_Tres_Belle_90_WED_T.jpg',
            sex: 'female',
            size: 90,
            price: 11.50,
            description: 'Azzaro Mademoiselle Leau Tres Belle  (90/W/EDT)',
            rating: 2.7
        },
        {
            _id: 5,
            name: 'Original Calvin Klein euphoria men 100ml M edit',
            shotName: 'Calvin Klein euphoria',
            brand: 'Calvin Klein',
            image: '/img/parfums/Original_Calvin_Klein_euphoria_men_100ml_M_edit.jpg',
            sex: 'male',
            size: 100,
            price: 15,
            description: 'Calvin Klein euphoria men 100ml M edit',
            rating: 4.5
        },
        {
            _id: 6,
            name: 'Original Calvin Klein euphoria women 100ml edp',
            shotName: 'Calvin Klein euphoria',
            brand: 'Calvin Klein',
            image: '/img/parfums/Original_Calvin_Klein_euphoria_women_100ml_edp.jpg',
            sex: 'female',
            size: 100,
            price: 15,
            description: 'Calvin Klein euphoria women 100ml edp',
            rating: 5
        },
        {
            _id: 7,
            name: 'Тестер Calvin Klein Deep Euphoria women (100/W/EDP)',
            shotName: 'Calvin Klein Deep Euphoria',
            brand: 'Calvin Klein',
            image: '/img/parfums/Tester_Calvin_Klein_Deep_Euphoria_women_100_W_EDP.jpg',
            sex: 'female',
            size: 100,
            price: 13,
            description: 'Calvin Klein Deep Euphoria women (100/W/EDP)',
            rating: 3.6
        },
        {
            _id: 8,
            name: 'Original Chanel Allure Homme Sport 100ml edt M',
            shotName: 'Chanel Allure Homme Sport',
            brand: 'Chanel',
            image: '/img/parfums/Original_Chanel_Allure_Homme_Sport_100ml_edt_M.jpg',
            sex: 'male',
            size: 100,
            price: 16,
            description: 'Chanel Allure Homme Sport 100ml edt M',
            rating: 4.1
        },
    ],
}

 export default data;