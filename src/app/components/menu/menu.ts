import { Component } from '@angular/core';

type FoodMenu = {
  label: string;
  items: Array<{
    picture?: string;
    label: string;
    price: string;
    largePrice?: string;
  }>;
};

function menuItem(
  label: string,
  picture: string,
  price: string,
  largePrice?: string
) {
  return { label, price, picture, largePrice };
}

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  menus: FoodMenu[] = [
    {
      label: 'Appetizers',
      items: [
        menuItem('Hummus', 'images/food/humus.jpeg', '$5.99', '$7.99'),
        menuItem('Mutabal', 'images/food/mutabal.jpeg', '$5.99', '$7.99'),
        menuItem('Baba ganouj', 'images/food/baba-ganouj.jpeg', '$5.99', '$7.99'),
        menuItem('kibbeh', 'images/food/kibbeh.jpeg', '$10.00/6pc', '$20.00/12pc'),
        menuItem('Grape Leaves', 'images/food/grape-leaves.jpeg', '$4.99/6pc', '$9.99/12pc'),
        menuItem('Muhamara', 'images/food/muhamara.jpeg', '$5.99', '$7.99'),
        menuItem('Guacamole', 'images/food/guacamole.jpeg', '$5.99', '$7.99'),
        menuItem('Tabouli salad', 'images/food/tabouli-salad.jpeg', '$5.99', '$7.99'),
        menuItem('Fattoush salad', 'images/food/fattoush-salad.jpeg', '$5.99', '$7.99'),
        menuItem('Greek salad', 'images/food/greek-salad.jpeg', '$5.99', '$7.99'),
        menuItem('Fries', 'images/food/fries.jpeg', '$5.99', '$7.99'),
        menuItem('Garlic sauce', 'images/food/garlic-sauce.jpeg', '$5.99', '$7.99'),
        menuItem('Batata Harra', 'images/food/batata-harra.jpeg', '$5.99', '$7.99'),
      ],
    },
    {
      label: 'Manakish',
      items: [
        menuItem('Cheese', 'images/food/cheese.jpeg', '$5.99'),
        menuItem('Four cheese blend', '', '$6.99'),
        menuItem('Zaatar', 'images/food/zaatar.jpeg', '$3.99'),
        menuItem('Cheese & Zaatar', '', '$5.99'),
        menuItem('Meat', '', '$4.99'),
        menuItem('Meat & cheese', '', '$5.99'),
        menuItem('Mahamara', '', '$4.99'),
        menuItem('Mahamara & cheese', '', '$5.99'),
        menuItem('Spinach', '', '$3.99'),
        menuItem('Spinach & feta', '', '$5.99'),
        menuItem('Veggies & cheese', '', '$5.99'),
        menuItem('Veggies', '', '$4.99'),
        menuItem('kishk', '', '$5.99'),
        menuItem('Zaatar & labneh', '', '$5.99'),
        menuItem('Potatos', '', '$3.99'),
        menuItem('Potato & Awarma', '', '$5.99'),
        menuItem('Labneh & Awarma', '', '$6.99'),
        menuItem('Sujuk & cheese', '', '$6.99'),
        menuItem('Mortadella & cheese', '', '$6.99'),
        menuItem('Kafta', '', '$5.99'),
        menuItem('Kafta & cheese', '', '$6.99'),
        menuItem('Donair & cheese', '', '$6.99'),
        menuItem('Royal Bake special', '', '$9.99'),
        menuItem('Nutella & Banana', '', '$5.99'),
      ],
    },
    {
      label: 'Mini pies',
      items: [
        menuItem('Mini cheese', '', '$17.99 dozen'),
        menuItem('Mini Zaatar', '', '$11.99 dozen'),
        menuItem('Mini kishik', '', '$11.99 dozen'),
        menuItem('Mini pizza', '', '$11.99 dozen'),
        menuItem('Spinach', '', '$11.99 dozen'),
        menuItem('Sfeeha', '', '$11.99 dozen'),
        menuItem('Chicken pocket', '', '$17.99 dozen'),
        menuItem('cheese samosa', '', '$11.99 dozen'),
        menuItem('Potato', '', '$11.99 dozen'),
        menuItem('Feta & walnuts', '', '$11.99 dozen'),
        menuItem('Shami cheese', '', '$17.99 dozen'),
        menuItem('Cheese roll', '', '$11.99 dozen'),
        menuItem('Musakhan roll', '', '$11.99 dozen'),
        menuItem('Esh-bulbul', '', '$19.99 dozen'),
        menuItem('Mini cheese croissant', '', '$11.99 dozen'),
        menuItem('Mini zaatar croissant', '', '$11.99 dozen'),
        menuItem('Mini hotdog croissant', '', '$11.99 dozen'),
        menuItem('Mini nutella croissant', '', '$11.99 dozen'),
      ],
    },
    {
      label: 'Breakfast',
      items: [
        menuItem('Foul tahini', '', '$8.99', '$17.99'),
        menuItem('Foul', '', '$8.99', '$17.99'),
        menuItem('Fatteh', '', '$12.99', '$19.99'),
        menuItem('Eggplant Fatteh', '', '$12.99', '$19.99'),
        menuItem('Falafel', '', '5.99/6pc','11.99/12pc'),
        menuItem('مقلى لحمة', '', '$14.99'),
        menuItem('Scrambled eggs', '', '$7.88'),
        menuItem('Eggs & Awarma', '', '$9.99'),
        menuItem('Eggs & sujuk', '', '$9.99'),
        menuItem('Eggs & veggies', '', '$9.99'),
        menuItem('Labneh', '', '$5.99'),
        menuItem('Mamounieh', '', '$9.99'),
        menuItem('Msabbaha', '', '$8.99', '$17.99'),
        menuItem('Balila', '', '$8.99', '$17.99'),
        menuItem('Veggies', '', '$4.99'),
      ]
    },
    {
      label: 'BBQ & Main Dishes',
      items: [
        menuItem('Lamp chups', '', '$17.99'),
        menuItem('shish tawook', '', '$14.99'),
        menuItem('Kafta Kebab', '', '$14.99'),
        menuItem('Halabi Kebab', '', '$15.99'),
        menuItem('Cheese Kebab', '', '$15.99'),
        menuItem('Lahme bil sahen (Veggie)', '', '$14.99'),
        menuItem('Lahme bil sahen (Tahini)', '', '$14.99'),
      ]
    },
    {
      label: 'Family Platters',
      items: [
        menuItem('3 People ', '', '$54.99'),
        menuItem('4 People ', '', '$74.99'),
        menuItem('5 People ', '', '$94.99'),
        menuItem('10 People ', '', '$174.99'),
        menuItem('20 People ', '', '$349.99'),
      ]
    },
    {
      label: 'Drinks',
      items: [
        menuItem('Water ', '', '$1.99'),
        menuItem('Pop ', '', '$1.99'),
        menuItem('Redbull', '', '$2.99'),
        menuItem('Juice', '', '$2.99'),
        menuItem('Ayran', '', '$2.99'),
        menuItem('Tea Pot', '', '$5.99'),
      ]
    },

  ];
}
