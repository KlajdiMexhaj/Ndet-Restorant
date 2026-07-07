import { MenuItem, UIContent } from '../types';
import NdetMenuOmlete from '../assets/images/Ndet-menu-omlete.jpg';
import NdetMenuVezeSy from '../assets/images/NDet-menu-veze-sy.jpg';
import NdetMenuPetulla from '../assets/images/NDet-menu-petulla.jpg';
import NdetMenuKrepa from '../assets/images/NDet-menu-krepa.jpg';
import NdetMenuBriosh from '../assets/images/NDet-menu-briosh.jpg';
import NdetMenuSallateMikse from '../assets/images/NDet-menu-sallate-mikse.jpg';
import NdetMenuSallateRukola from '../assets/images/NDet-menu-sallate-rukola.jpg';
import NdetMenuSallateGreke from '../assets/images/NDet-menu-sallate-greke.jpg';
import NdetMenuSallateCezarPule from '../assets/images/NDet-menu-sallate-cezar-mish.jpg';
import NdetMenuSallateCezarKarkalec from '../assets/images/NDet-menu-sallate-cezar-karkalec.jpg';
import NdetMenuFogaqe from '../assets/images/NDet-menu-fogaqe.jpg';
import NdetMenuBrusket from '../assets/images/NDet-menu-brusketa.jpg';
import NdetMenuBukemisri from '../assets/images/NDet-menu-misri.jpg';
import NdetMenuDjath from '../assets/images/NDet-menu-djath.jpg';
import NdetMenuSalceKosi from '../assets/images/NDet-menu-salce-kosi.jpg';
import NdetMenuPatateSkuqura from '../assets/images/NDet-menu-patate.jpg';
import NdetMenuPerimeZgare from '../assets/images/NDet-menu-perime.jpg';
import NdetMenuSupePeshku from '../assets/images/NDet-menu-supe-peshku.jpg';
import NdetMenuSupePule from '../assets/images/NDet-menu-supe-pule.jpg';
import Ndetaboutus2 from '../assets/images/NDet-about-us-linguini-shëngjin-1.jpg';
import NdetMenuSpagetiPule from '../assets/images/NDet-menu-spageti-pule.jpg';
import NdetMenuSpagetiBolonjeze from '../assets/images/NDet-menu-spageti-bolonjeze.jpg';
import NdetMenuPeneKarbonara from '../assets/images/NDet-menu-pene-karbonara.jpg';
import NdetMenuPeneArrabiata from '../assets/images/NDet-menu-pene-arrabiata.jpg';
import NdetMenuRizoto from '../assets/images/NDet-menu-rizoto.jpg';
import NdetMenuKarkalec from '../assets/images/NDet-menu-karkaleca.jpg';
import NdetMenuKallamare from '../assets/images/NDet-menu-kallamar-1.jpg';
import NdetMenuOktapod from '../assets/images/NDet-menu-oktapod.jpg';
import NdetMenuSepie from '../assets/images/NDet-menu-fruta-deti.jpg';
import NdetMenuMidhje from '../assets/images/NDet-menu-midhje.jpg';
import NdetMenuKarkalecSalce from '../assets/images/NDet-menu-karkaleca-salce.jpg';
import Ndetaboutus3 from '../assets/images/NDet-about-us-fruta-deti-shëngjin-1.jpg';
import NdetMenuLevrek from '../assets/images/NDet-menu-levrek.jpg';
import NdetMenuFiletoPule from '../assets/images/NDet-menu-fileto-pule.jpg';
import NdetMenuMishi from '../assets/images/NDet-menu-mishi.jpg';
import NdetMenuPicaMargarita from '../assets/images/NDet-menu-pica-margarita.jpg';
import NdetMenuPicaSallam from '../assets/images/NDet-menu-pica-sallam.jpg';
import NdetMenuPicaProshute from '../assets/images/NDet-menu-pica-proshute.jpg';
import NdetMenuPicaKerpudhe from '../assets/images/NDet-menu-pica-kerpudhe.jpg';
import NdetMenuPica4Stinet from '../assets/images/NDet-menu-pica-4-stinet.jpg';
import NdetMenuPicaTon from '../assets/images/NDet-menu-pica-ton.jpg';
import NdetMenuPicaFrutaDeti from '../assets/images/NDet-menu-pica-fruta-deti.jpg';
import NdetMenuPicaKapricoze from '../assets/images/NDet-menu-pica-kapricoze.jpg';
import NdetMenuPica4Djathrat from '../assets/images/NDet-menu-pica-4-djathrat.jpg';
import NdetMenuPicaAmerikane from '../assets/images/NDet-menu-pica-amerikane.jpg';
import NdetMenuPicaHawai from '../assets/images/NDet-menu-pica-hawai.jpg';
import NdetMenuPicaSpeciale from '../assets/images/NDet-menu-pica-speciale.jpg';
import NdetMenuPicaShpie from '../assets/images/NDet-menu-pica-shpie.jpg';
import NdetMenuPicaCalzone from '../assets/images/NDet-menu-pica-calzone.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // --- MËNGJESI / BREAKFAST ---
  {
    id: 'b-1',
    name: { sq: 'Omëletë e thjeshtë', en: 'Omelette' },
    price: '250 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Vezë të freskëta, gjalpë, kripë, piper', en: 'Fresh eggs, butter, salt, pepper' }
    ],
    image: NdetMenuOmlete
  },
  {
    id: 'b-2',
    name: { sq: 'Omëletë djath, proshutë pule', en: 'Omelette Cheese, Chicken Ham' },
    price: '300 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Vezë kopshti, djathë i bardhë, proshutë pule cilësore', en: 'Garden eggs, white cheese, premium chicken ham' }
    ],
    image: NdetMenuOmlete
  },
  {
    id: 'b-3',
    name: { sq: 'Vezë sy', en: 'Fried eggs' },
    price: '250 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Vezë të skuqura me kujdes', en: 'Perfectly fried sunny-side up eggs' }
    ],
    image: NdetMenuVezeSy
  },
  {
    id: 'b-4',
    name: { sq: 'Petulla', en: 'Traditional Petulla' },
    price: '300 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Brumë tradicional i skuqur, i lehtë dhe i fryrë', en: 'Traditional fried dough, light and fluffy' }
    ],
    image: NdetMenuPetulla
  },
  {
    id: 'b-5',
    name: { sq: 'Petulla Reçel', en: 'Petulla with Jam' },
    price: '350 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Petulla shtëpie të shoqëruara me reçel bio', en: 'Homemade petulla served with organic jam' }
    ],
    image: NdetMenuPetulla
  },
  {
    id: 'b-6',
    name: { sq: 'Petulla Djath', en: 'Petulla with Cheese' },
    price: '350 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Petulla të freskëta të shoqëruara me djathë lope', en: 'Fresh petulla served with local cow cheese' }
    ],
    image: NdetMenuPetulla
  },
  {
    id: 'b-7',
    name: { sq: 'Petulla Nutella', en: 'Petulla with Nutella' },
    price: '350 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Petulla të ngrohta të mbushura me çokollatë Nutella', en: 'Warm petulla layered with rich Nutella chocolate' }
    ],
    image: NdetMenuPetulla
  },
  {
    id: 'b-8',
    name: { sq: 'Krepa', en: 'Crepes' },
    price: '300 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Krepa të freskëta franceze sipas dëshirës', en: 'Freshly prepared French crepes' }
    ],
    image: NdetMenuKrepa
  },
  {
    id: 'b-9',
    name: { sq: 'Briosh', en: 'Brioche' },
    price: '150 L',
    category: 'breakfast',
    ingredients: [
      { sq: 'Briosh i pjekur i freskët dhe i butë', en: 'Freshly baked warm and soft brioche pastry' }
    ],
    image: NdetMenuBriosh
  },

  // --- SALLATA / SALADS ---
  {
    id: 's-1',
    name: { sq: 'Sallatë Mikse', en: 'Mix Salad' },
    price: '350 L',
    category: 'salads',
    ingredients: [
      { sq: 'Gjethe të freskëta jeshile, domate, kastravecë, karrota, vaj ulliri', en: 'Fresh greens, tomatoes, cucumber, carrots, olive oil' }
    ],
    image: NdetMenuSallateMikse
  },
  {
    id: 's-2',
    name: { sq: 'Sallatë Rukola, Grana', en: 'Arugula, Grana Salad' },
    price: '500 L',
    category: 'salads',
    ingredients: [
      { sq: 'Rukola e freskët egër, copa djathi Grana Padano, uthull balsamike', en: 'Wild arugula, Grana Padano flakes, balsamic glaze' }
    ],
    image: NdetMenuSallateRukola
  },
  {
    id: 's-3',
    name: { sq: 'Sallatë Rukola, Grana, Burrata', en: 'Arugula, Grana, Burrata Salad' },
    price: '900 L',
    category: 'salads',
    ingredients: [
      { sq: 'Rukola e freskët, fleta Grana, djathë kremos Burrata i freskët, vaj ulliri', en: 'Fresh arugula, Grana flakes, rich creamy Burrata cheese, olive oil' }
    ],
    image: NdetMenuSallateRukola
  },
  {
    id: 's-4',
    name: { sq: 'Sallatë Greke', en: 'Greek Salad' },
    price: '400 L',
    category: 'salads',
    ingredients: [
      { sq: 'Domate, kastravecë, djathë feta, ullinj Kalamata, qepë të kuqe, rigon', en: 'Tomatoes, cucumbers, feta cheese, Kalamata olives, red onions, oregano' }
    ],
    image: NdetMenuSallateGreke
  },
  {
    id: 's-5',
    name: { sq: 'Sallatë Cezar (mish pule)', en: 'Caesar Salad (grilled chicken)' },
    price: '550 L',
    category: 'salads',
    ingredients: [
      { sq: 'Fileto pule në skarë, sallatë marule, parmixhano, krutone, salcë Cezar', en: 'Grilled chicken fillet, crisp romaine lettuce, parmesan, croutons, Caesar dressing' }
    ],
    image: NdetMenuSallateCezarPule
  },
  {
    id: 's-6',
    name: { sq: 'Sallatë Cezar (karkalec)', en: 'Caesar Salad (shrimps)' },
    price: '650 L',
    category: 'salads',
    ingredients: [
      { sq: 'Karkaleca në skarë, marule, parmesan, krutone, salcë Cezar', en: 'Grilled shrimps, romaine lettuce, parmesan flakes, croutons, Caesar dressing' }
    ],
    image: NdetMenuSallateCezarKarkalec
  },
  {
    id: 's-7',
    name: { sq: 'Sallatë Jeshile', en: 'Green Salad' },
    price: '250 L',
    category: 'salads',
    ingredients: [
      { sq: 'Sallatë e gjelbër e freskët kopshti, lëng limoni, vaj ulliri ekstra i virgjër', en: 'Fresh garden green lettuce, fresh lemon juice, extra virgin olive oil' }
    ],
    image: NdetMenuSallateMikse
  },

  // --- STARTUESE / STARTERS ---
  {
    id: 'st-1',
    name: { sq: 'Fogaqe', en: 'Fogaqe Bread' },
    price: '250 L',
    category: 'starters',
    ingredients: [
      { sq: 'Vaj ulliri ekstra i virgjër, rigon i egër, bukë e pjekur në furrë', en: 'Extra virgin olive oil, wild oregano, stone-baked flatbread' }
    ],
    image: NdetMenuFogaqe
  },
  {
    id: 'st-2',
    name: { sq: 'Brusketë', en: 'Bruschetta' },
    price: '400 L',
    category: 'starters',
    ingredients: [
      { sq: 'Bukë e thekur, domate të grira, hudhër, borzilok i freskët, vaj ulliri', en: 'Toasted bread, diced tomatoes, garlic rub, fresh basil, olive oil' }
    ],
    image: NdetMenuBrusket
  },
  {
    id: 'st-3',
    name: { sq: 'Bukë Misri', en: 'Cornbread' },
    price: '250 L',
    category: 'starters',
    ingredients: [
      { sq: 'Bukë misri tradicionale shqiptare e gatuar në shtëpi', en: 'Traditional Albanian homemade yellow cornbread' }
    ],
    image: NdetMenuBukemisri
  },
  {
    id: 'st-4',
    name: { sq: 'Djathë Lope', en: 'Cow Cheese' },
    price: '300 L',
    category: 'starters',
    ingredients: [
      { sq: 'Djathë i bardhë lope i prodhuar lokalisht', en: 'Freshly portioned premium local white cow cheese' }
    ],
    image: NdetMenuDjath
  },
  {
    id: 'st-5',
    name: { sq: 'Djathë Dhie', en: 'Goat Cheese' },
    price: '400 L',
    category: 'starters',
    ingredients: [
      { sq: 'Djathë dhie i egër, i pasur dhe i pjekur nga bjeshkët', en: 'Authentic rich mountain goat cheese selection' }
    ],
    image: NdetMenuDjath
  },
  {
    id: 'st-6',
    name: { sq: 'Salcë Kosi', en: 'Sour Cream Dip' },
    price: '200 L',
    category: 'starters',
    ingredients: [
      { sq: 'Salcë kosi e trashë tradicionale me hudhër, vaj ulliri e kastravec', en: 'Thick traditional strained yogurt dip with garlic, cucumber, olive oil' }
    ],
    image: NdetMenuSalceKosi
  },
  {
    id: 'st-7',
    name: { sq: 'Patate të Skuqura', en: 'Fried Potatoes' },
    price: '250 L',
    category: 'starters',
    ingredients: [
      { sq: 'Patate të freskëta të skuqura, të spërkatura me rigon të egër', en: 'Freshly cut hand-made French fries dusted with wild oregano' }
    ],
    image: NdetMenuPatateSkuqura
  },
  {
    id: 'st-8',
    name: { sq: 'Perime Zgare', en: 'Grilled Vegetables' },
    price: '300 L',
    category: 'starters',
    ingredients: [
      { sq: 'Patëllxhan, kungulleshkë, speca, kërpudha në skarë me vaj ulliri', en: 'Sizzling grilled eggplant, zucchini, peppers, and mushrooms' }
    ],
    image: NdetMenuPerimeZgare
  },

  // --- SUPË / SOUP ---
  {
    id: 'sp-1',
    name: { sq: 'Supë Peshku', en: 'Fish Soup' },
    price: '400 L',
    category: 'soup',
    ingredients: [
      { sq: 'Lëng i freskët peshku i egër, karrota, selino, barëra deti', en: 'Fresh wild fish broth simmered with root vegetables, lemon and herbs' }
    ],
    image: NdetMenuSupePeshku
  },
  {
    id: 'sp-2',
    name: { sq: 'Supë Pule', en: 'Chicken Soup' },
    price: '350 L',
    category: 'soup',
    ingredients: [
      { sq: 'Lëng i pasur pule shtëpie, mish pule i copëtuar, limon, perime', en: 'Rich homemade chicken broth, tender chicken pieces, lemon and fine vegetables' }
    ],
    image: NdetMenuSupePule
  },

  // --- PASTA ---
  {
    id: 'p-1',
    name: { sq: 'Linguini Fruta Deti', en: 'Linguine Seafood' },
    price: '750 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Linguini të freskëta, midhje, karkalec, kallamar, domate qershizë, verë e bardhë', en: 'Fresh linguine, mussels, shrimp, squid, cherry tomatoes, garlic, white wine' }
    ],
    image: Ndetaboutus2
  },
  {
    id: 'p-2',
    name: { sq: 'Linguini Karkalec', en: 'Linguine Shrimps' },
    price: '800 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Karkaleca deti të freskët, salcë delikate, hudhër, majdanoz', en: 'Fresh gulf shrimps, garlic, white wine glaze, fresh garden parsley' }
    ],
    image: Ndetaboutus2
  },
  {
    id: 'p-3',
    name: { sq: 'Linguini Karkalec, Kungull', en: 'Linguine Shrimps, Zucchini' },
    price: '850 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Karkaleca, kungulleshkë e ëmbël, vaj ulliri, salcë kremoze e lehtë', en: 'Sautéed shrimps, tender zucchini julienne, touch of light cream, extra virgin olive oil' }
    ],
    image: Ndetaboutus2
  },
  {
    id: 'p-4',
    name: { sq: 'Spageti Fileto Pule', en: 'Spaghetti Chicken Fillet' },
    price: '650 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Spageti, fileto pule në skarë, salcë e bardhë parmixhano', en: 'Spaghetti, tender chicken fillet chunks, light parmesan cream sauce' }
    ],
    image: NdetMenuSpagetiPule
  },
  {
    id: 'p-5',
    name: { sq: 'Spageti Bolonjeze', en: 'Spaghetti Bolognese' },
    price: '500 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Salcë e pasur mishi e zier ngadalë me domate dhe erëza', en: 'Classic Italian slow-cooked beef and veal ragu sauce' }
    ],
    image: NdetMenuSpagetiBolonjeze
  },
  {
    id: 'p-6',
    name: { sq: 'Pene Karbonara', en: 'Penne Carbonara' },
    price: '550 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Pene, guanciale e skuqur kërp, e verdhë veze, djathë pekorino', en: 'Penne pasta, crispy pork guanciale, rich egg yolk emulsion, black pepper, pecorino' }
    ],
    image: NdetMenuPeneKarbonara
  },
  {
    id: 'p-7',
    name: { sq: 'Pene Arrabiata', en: 'Penne Arrabiata' },
    price: '500 L',
    category: 'pasta',
    ingredients: [
      { sq: 'Salcë domate pikante, hudhër, spec djegës i kuq, vaj ulliri', en: 'Fiery tomato sauce, garlic, red hot chilies, Italian parsley' }
    ],
    image: NdetMenuPeneArrabiata
  },

  // --- RIZOTO / RISOTTO ---
  {
    id: 'r-1',
    name: { sq: 'Rizoto Fruta Deti', en: 'Seafood Risotto' },
    price: '800 L',
    category: 'risotto',
    ingredients: [
      { sq: 'Oriz Arborio, midhje, karkaleca, kallamarë, verë e bardhë, gjalpë parmixhano', en: 'Premium Arborio rice, mixed seafood platter, white wine broth, whipped butter' }
    ],
    image: NdetMenuRizoto
  },
  {
    id: 'r-2',
    name: { sq: 'Rizoto Karkalec', en: 'Shrimps Risotto' },
    price: '850 L',
    category: 'risotto',
    ingredients: [
      { sq: 'Oriz Arborio, karkaleca deti të egër, lëng i pasur detar', en: 'Arborio rice cooked in rich seafood bisque, fresh shrimps, fine herbs' }
    ],
    image: NdetMenuRizoto
  },
  {
    id: 'r-3',
    name: { sq: 'Rizoto Karkalec, Kungull', en: 'Shrimps, Zucchini Risotto' },
    price: '900 L',
    category: 'risotto',
    ingredients: [
      { sq: 'Oriz Arborio, karkaleca, kungulleshkë e hollë, erëza, gjalpë', en: 'Arborio rice, sautéed shrimps, sweet zucchini coins, light herb infusion' }
    ],
    image: NdetMenuRizoto
  },
  {
    id: 'r-4',
    name: { sq: 'Rizoto Perime', en: 'Vegetables Risotto' },
    price: '700 L',
    category: 'risotto',
    ingredients: [
      { sq: 'Oriz Arborio, perime të freskëta të stinës, lëng vegjetal, parmesan', en: 'Arborio rice, seasonal fresh garden vegetables, delicate stock, whipped parmesan' }
    ],
    image: NdetMenuRizoto
  },

  // --- FRUTA DETI / SEAFOOD ---
  {
    id: 'sf-1',
    name: { sq: 'Karkalec (Zgare, Frito, Krudo)', en: 'Shrimps (Grilled, Fried, Crude)' },
    price: '750 L (2p) | 1500 L (4p)',
    category: 'seafood',
    ingredients: [
      { sq: 'Karkaleca të freskët sipas zgjedhjes suaj: skarë, të skuqur, ose krudo', en: 'Fresh local shrimps prepared to your style: grilled, golden fried, or raw carpaccio' }
    ],
    image: NdetMenuKarkalec
  },
  {
    id: 'sf-2',
    name: { sq: 'Kallamare (Zgare, Frito, Krudo)', en: 'Squid (Grilled, Fried, Crude)' },
    price: '750 L (2p) | 1500 L (4p)',
    category: 'seafood',
    ingredients: [
      { sq: 'Kallamare të freskëta sipas dëshirës (skarë, frito apo krudo)', en: 'Fresh local squid cooked to your taste: char-grilled, fried, or crude' }
    ],
    image: NdetMenuKallamare
  },
  {
    id: 'sf-3',
    name: { sq: 'Oktapod (Zgare, Frito, Krudo)', en: 'Octopus (Grilled, Fried, Crude)' },
    price: '750 L (2p) | 1500 L (4p)',
    category: 'seafood',
    ingredients: [
      { sq: 'Oktapod deti i egër (gatuar sipas dëshirës)', en: 'Tender wild-caught octopus prepared grilled, crispy fried, or raw carpaccio' }
    ],
    image: NdetMenuOktapod
  },
  {
    id: 'sf-4',
    name: { sq: 'Sepie (Zgare, Frito, Krudo)', en: 'Cuttlefish (Grilled, Fried, Crude)' },
    price: '750 L (2p) | 1500 L (4p)',
    category: 'seafood',
    ingredients: [
      { sq: 'Sepie e freskët Adriatiku gatuar sipas mënyrës suaj', en: 'Fresh Adriatic cuttlefish prepared grilled, light fried, or raw marinated' }
    ],
    image: NdetMenuSepie
  },
  {
    id: 'sf-5',
    name: { sq: 'Midhje Soté', en: 'Mussels Sauté' },
    price: '300 L (2p) | 600 L (4p)',
    category: 'seafood',
    ingredients: [
      { sq: 'Midhje të freskëta deti, verë e bardhë, hudhër, vaj ulliri, majdanoz', en: 'Fresh coastal mussels, dry white wine, garlic rub, extra virgin olive oil, parsley' }
    ],
    image: NdetMenuMidhje
  },
  {
    id: 'sf-6',
    name: { sq: 'Karkalec në salcë', en: 'Shrimps in Sauce' },
    price: '1000 L',
    category: 'seafood',
    ingredients: [
      { sq: 'Karkaleca të zier ngadalë në salcë të pasur me domate kopshti e erëza', en: 'Fresh shrimps slow-cooked in a rich seasoned cherry tomato and garlic reduction' }
    ],
    image: NdetMenuKarkalecSalce
  },
  {
    id: 'sf-7',
    name: { sq: 'Kallamare e mbushur', en: 'Filled Squid' },
    price: '1000 L',
    category: 'seafood',
    ingredients: [
      { sq: 'Kallamare e mbushur me djathëra të shkrirë dhe barëra të freskëta', en: 'Whole squid stuffed with melted cheeses and fresh Mediterranean herbs' }
    ],
    image: NdetMenuKallamare
  },
  {
    id: 'sf-8',
    name: { sq: 'Karpaco Levreku', en: 'Sea Bass Carpaccio' },
    price: '1200 L',
    category: 'seafood',
    ingredients: [
      { sq: 'Prerje mjaft e hollë e levrekut të egër, lëng limoni, piper rozë, vaj ulliri', en: 'Paper-thin slices of wild sea bass, cold-pressed olive oil, citrus, pink pepper' }
    ],
    image: Ndetaboutus3
  },
  {
    id: 'sf-9',
    name: { sq: 'Miks i Mesëm', en: 'Medium Mix' },
    price: '2000 L',
    category: 'seafood',
    ingredients: [
      { sq: 'Pjatancë e përzgjedhur me karkaleca, kallamarë, sepie dhe midhje për dy persona', en: 'An exquisite sharing platter of fresh seasonal local seafood for 2 people' }
    ],
    image: NdetMenuSepie
  },
  {
    id: 'sf-10',
    name: { sq: 'Miks i Madh', en: 'Large Mix' },
    price: '4000 L',
    category: 'seafood',
    ingredients: [
      { sq: 'Pjatancë gjigante familjare me të gjitha llojet e frutave të detit premium', en: 'The ultimate premium feast sharing platter of Adriatic seafood for the table' }
    ],
    image: NdetMenuSepie
  },

  // --- PESHK I EGËR / WILD FISH ---
  {
    id: 'wf-1',
    name: { sq: 'Kocë (Deti i Egër)', en: 'Sea Bream (Wild)' },
    price: '700 L / 100g',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Kocë e egër e kapur freskët, pjekur në skarë', en: 'Wild-caught fresh Sea Bream cooked whole on the grill with fine sea salt' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-2',
    name: { sq: 'Levrek (Deti i Egër)', en: 'Sea Bass (Wild)' },
    price: '700 L / 100g',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Levrek i egër i freskët, i gatuar me mjeshtëri me vaj e limon', en: 'Wild Sea Bass masterfully grilled and brushed with extra virgin olive oil and lemon' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-3',
    name: { sq: 'Merluc I', en: 'Merluccius I' },
    price: '1200 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Merluc i freskët i detit të hapur, i kategorisë së parë', en: 'First-grade premium fresh wild hake fish, cooked to order' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-4',
    name: { sq: 'Merluc II', en: 'Merluccius II' },
    price: '1000 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Merluc i freskët i kategorisë së dytë', en: 'Second-grade fresh wild hake fish' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-5',
    name: { sq: 'Merluc III', en: 'Merluccius III' },
    price: '800 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Merluc i freskët i kategorisë së tretë', en: 'Third-grade fresh wild hake fish' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-6',
    name: { sq: 'Friturë Merluci', en: 'Fried Merluccius' },
    price: '600 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Merluc i skuqur në mënyrë të përkryer kërcitës e i artë', en: 'Perfectly crispy and golden fried hake pieces' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-7',
    name: { sq: 'Barbun I', en: 'Mullus I' },
    price: '1200 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Barbun deti i kategorisë së parë', en: 'First-grade fresh Red Mullet, highly prized for sweet flavor' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-8',
    name: { sq: 'Barbun II', en: 'Mullus II' },
    price: '1000 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Barbun deti i kategorisë së dytë', en: 'Second-grade fresh Red Mullet' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-9',
    name: { sq: 'Barbun III', en: 'Mullus III' },
    price: '800 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Barbun deti i kategorisë së tretë', en: 'Third-grade fresh Red Mullet' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-10',
    name: { sq: 'Friturë Barbuni', en: 'Fried Mullus' },
    price: '600 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Barbun i vogël i freskët, i skuqur i nxehtë e kërcitës', en: 'Crispy fried local red mullet' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-11',
    name: { sq: 'Shojzë I', en: 'Tonguefish I' },
    price: '1400 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Shojzë e egër e kategorisë së parë të freskët', en: 'Prime first-grade wild Sole fish' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-12',
    name: { sq: 'Shojzë II', en: 'Tonguefish II' },
    price: '1200 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Shojzë e kategorisë së dytë', en: 'Second-grade wild Sole fish' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-13',
    name: { sq: 'Shojzë III', en: 'Tonguefish III' },
    price: '1000 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Shojzë e kategorisë së tretë', en: 'Third-grade wild Sole fish' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-14',
    name: { sq: 'Ngjalë I', en: 'Eel I' },
    price: '1200 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Ngjalë e egër e kategorisë së parë të freskët', en: 'Premium first-grade fresh wild Eel' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-15',
    name: { sq: 'Ngjalë II', en: 'Eel II' },
    price: '1000 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Ngjalë e egër e kategorisë së dytë', en: 'Second-grade fresh wild Eel' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-16',
    name: { sq: 'Ngjalë III', en: 'Eel III' },
    price: '800 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Ngjalë e egër e kategorisë së tretë', en: 'Third-grade fresh wild Eel' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'wf-17',
    name: { sq: 'Miks Peshku', en: 'Mix Fish' },
    price: '2000 L',
    category: 'wild_fish',
    ingredients: [
      { sq: 'Pjatancë e përzgjedhur me peshq të freskët të egër të gatuar në skarë ose skuqur', en: 'Assorted seasonal wild fish platter, grilled or fried with lemon dressing' }
    ],
    image: NdetMenuSepie
  },

  // --- PESHK / FISH ---
  {
    id: 'f-1',
    name: { sq: 'Kocë (400 g)', en: 'Sea Bream (400 g)' },
    price: '1400 L',
    category: 'fish',
    ingredients: [
      { sq: 'Porcion i plotë i kocës në skarë me perime dhe limon', en: 'Whole portioned grilled Sea Bream served with lemon and herb oil' }
    ],
    image: NdetMenuLevrek
  },
  {
    id: 'f-2',
    name: { sq: 'Levrek (400 g)', en: 'Sea Bass (400 g)' },
    price: '1400 L',
    category: 'fish',
    ingredients: [
      { sq: 'Porcion i plotë i levrekut të freskët në skarë', en: 'Whole portioned grilled Sea Bass served with microgreens and lemon' }
    ],
    image: NdetMenuLevrek
  },

  // --- MISH / MEAT ---
  {
    id: 'm-1',
    name: { sq: 'Fileto Pule (Garniturë)', en: 'Chicken Fillet (Garnish)' },
    price: '700 L',
    category: 'meat',
    ingredients: [
      { sq: 'Gjoks pule i butë në skarë, patate të skuqura ose perime', en: 'Tender grilled chicken breast, served with fresh french fries or grilled vegetables' }
    ],
    image: NdetMenuFiletoPule
  },
  {
    id: 'm-2',
    name: { sq: 'Pleskavicë (Garniturë)', en: 'Pleskavicë (Garnish)' },
    price: '650 L',
    category: 'meat',
    ingredients: [
      { sq: 'Pleskavicë tradicionale mishi, patate të skuqura dhe garniturë specash', en: 'Traditional minced meat patty, served with french fries and vegetable garnish' }
    ],
    image: NdetMenuMishi
  },
  {
    id: 'm-3',
    name: { sq: 'Qebabë (5 Copë)', en: 'Kebab (5 Pieces)' },
    price: '400 L',
    category: 'meat',
    ingredients: [
      { sq: 'Pesë qofte tradicionale shqiptare në skarë', en: 'Five pieces of authentic grilled minced meat kebabs' }
    ],
    image: NdetMenuMishi
  },
  {
    id: 'm-4',
    name: { sq: 'Suxhuk', en: 'Sausage' },
    price: '400 L',
    category: 'meat',
    ingredients: [
      { sq: 'Suxhuk i shtëpisë me erëza, i pjekur në skarë', en: 'Spiced home-style sausage grilled over hot coals' }
    ],
    image: NdetMenuMishi
  },
  {
    id: 'm-5',
    name: { sq: 'Berxollë Viçi (Garniturë)', en: 'Veal Chop (Garnish)' },
    price: '1100 L',
    category: 'meat',
    ingredients: [
      { sq: 'Bërxollë e mrekullueshme viçi me patate dhe salcë shtëpie', en: 'Premium grilled veal chop served with fresh sides and lemon juice' }
    ],
    image: NdetMenuMishi
  },
  {
    id: 'm-6',
    name: { sq: 'Biftek Viçi (Garniturë)', en: 'Beefsteak (Garnish)' },
    price: '1100 L',
    category: 'meat',
    ingredients: [
      { sq: 'Biftek i lëngshëm viçi, pjekur sipas dëshirës, me garniturë perimesh', en: 'Juicy tender beefsteak cooked to your liking, served with garden sides' }
    ],
    image: NdetMenuMishi
  },
  {
    id: 'm-7',
    name: { sq: 'Mish Miks', en: 'Mixed Meat' },
    price: '1800 L',
    category: 'meat',
    ingredients: [
      { sq: 'Pjatancë e madhe me bërxollë, suxhuk, qebabë, pleskavicë dhe fileto pule', en: 'Generous sharing platter of grilled veal chop, sausages, kebabs, and chicken' }
    ],
    image: NdetMenuMishi
  },

  // --- PICA / PIZZA ---
  {
    id: 'pz-1',
    name: { sq: 'Margerita', en: 'Margherita' },
    price: '450 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela e freskët, vaj ulliri, borzilok', en: 'Rich tomato sauce, fresh mozzarella cheese, olive oil, basil leaves' }
    ],
    image: NdetMenuPicaMargarita
  },
  {
    id: 'pz-2',
    name: { sq: 'Sallam', en: 'Salami Pizza' },
    price: '550 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela, fleta salami premium', en: 'Tomato sauce, rich mozzarella, premium sliced salami' }
    ],
    image: NdetMenuPicaSallam
  },
  {
    id: 'pz-3',
    name: { sq: 'Sallam Pikant', en: 'Spicy Salami' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela, sallam pikant italian', en: 'Tomato sauce, mozzarella, fiery hot Italian salami slices' }
    ],
    image: NdetMenuPicaSallam
  },
  {
    id: 'pz-4',
    name: { sq: 'Proshutë Viçi', en: 'Veal Ham Pizza' },
    price: '550 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela, proshutë delikate viçi', en: 'Tomato sauce, mozzarella, tender sliced veal ham' }
    ],
    image: NdetMenuPicaProshute
  },
  {
    id: 'pz-5',
    name: { sq: 'Proshutë Kërpudhë', en: 'Veal Ham & Mushroom' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Mocarela, proshutë viçi, kërpudha të freskëta kopshti, salcë domate', en: 'Mozzarella, veal ham, fresh earthy mushrooms, rich tomato sauce' }
    ],
    image: NdetMenuPicaKerpudhe
  },
  {
    id: 'pz-6',
    name: { sq: '4 Stinët', en: '4 Stagioni' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Mocarela, proshutë, kërpudha, ullinj, artishok', en: 'Mozzarella, ham, mushrooms, olives, and artichokes in four sections' }
    ],
    image: NdetMenuPica4Stinet
  },
  {
    id: 'pz-7',
    name: { sq: 'Ton', en: 'Tuna Pizza' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela, copa toni, qepë të kuqe, ullinj', en: 'Tomato sauce, mozzarella, premium tuna chunks, sweet red onions, olives' }
    ],
    image: NdetMenuPicaTon
  },
  {
    id: 'pz-8',
    name: { sq: 'Fruta Deti', en: 'Seafood Pizza' },
    price: '800 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Mocarela, salcë domate, karkaleca, midhje, kallamarë, hudhër, majdanoz', en: 'Mozzarella, rich tomato base, shrimps, mussels, squid chunks, garlic oil' }
    ],
    image: NdetMenuPicaFrutaDeti
  },
  {
    id: 'pz-9',
    name: { sq: 'Kapricoze', en: 'Capricciosa' },
    price: '550 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela, proshutë, kërpudha, vezë e zier, ullinj', en: 'Tomato sauce, mozzarella, ham, mushrooms, sliced boiled egg, Kalamata olives' }
    ],
    image: NdetMenuPicaKapricoze
  },
  {
    id: 'pz-10',
    name: { sq: '4 Djathrat', en: '4 Formaggi' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Gorgonxola, parmixhano, mocarela, djathë pekorino', en: 'Gorgonzola, rich parmesan, fresh mozzarella, pecorino cheese' }
    ],
    image: NdetMenuPica4Djathrat
  },
  {
    id: 'pz-11',
    name: { sq: 'Amerikane', en: 'American Pizza' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Sallam Wudy, patate të skuqura, mocarela, salcë domate', en: 'Sausage Wudy, crispy French fries, mozzarella cheese, tomato base' }
    ],
    image: NdetMenuPicaAmerikane
  },
  {
    id: 'pz-12',
    name: { sq: 'Hawai', en: 'Hawaiian Pizza' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Proshutë viçi, ananas i ëmbël, mocarela e shkrirë', en: 'Veal ham, sweet pineapple chunks, melted mozzarella cheese' }
    ],
    image: NdetMenuPicaHawai
  },
  {
    id: 'pz-13',
    name: { sq: 'Saporita', en: 'Saporita Pizza' },
    price: '650 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Sallam pikant, djathë i shijshëm gorgonxola, mocarela', en: 'Spicy Italian salami, rich creamy gorgonzola cheese, mozzarella' }
    ],
    image: NdetMenuPicaSallam
  },
  {
    id: 'pz-14',
    name: { sq: 'Pica Speziale', en: 'Pizza Speziale' },
    price: '800 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Rukola e freskët, domate qershizë, fleta parmixhano, proshutë krudo', en: 'Fresh baby arugula, cherry tomatoes, shaved grana, delicate crudo ham' }
    ],
    image: NdetMenuPicaSpeciale
  },
  {
    id: 'pz-15',
    name: { sq: 'Shpie', en: 'House Special Pizza' },
    price: '700 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Përbërësit specialë sekretë të zgjedhur nga shefi', en: 'The chef\'s secret selection of fresh special house ingredients' }
    ],
    image: NdetMenuPicaShpie
  },
  {
    id: 'pz-16',
    name: { sq: 'Suxhuk', en: 'Suxhuk Pizza' },
    price: '550 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Salcë domate, mocarela, copa suxhuku pikant lokal', en: 'Tomato sauce, mozzarella, locally crafted spicy suxhuk sausage' }
    ],
    image: NdetMenuPicaSallam
  },
  {
    id: 'pz-17',
    name: { sq: 'Calzone', en: 'Calzone' },
    price: '600 L',
    category: 'pizza',
    ingredients: [
      { sq: 'Picë e palosur e mbushur me proshutë, kërpudha të freskëta, sallam, ullinj', en: 'Folded oven-baked pizza stuffed with ham, fresh mushrooms, salami, and black olives' }
    ],
    image: NdetMenuPicaCalzone
  }
];

export const UI_TRANSLATIONS: UIContent = {
  navHome: {
    en: "Home",
    sq: "Home"
  },
  navAbout: {
    en: "About",
    sq: "Rreth Nesh"
  },
  navMenu: {
    en: "Menu",
    sq: "Menu"
  },
  navContact: {
    en: "Contact",
    sq: "Kontakti"
  },
  navReservations: {
    en: "Reservations",
    sq: "Rezervime"
  },
  heroTitle: {
    en: "Adriatic Culinary Excellence",
    sq: "Ekselencë Kulinare Adriatike"
  },
  heroSubtitle: {
    en: "Savor premium, fresh wild-caught fish, artisanal pasta, and wood-fired stone pizza on the Albanian Riviera.",
    sq: "Shijoni peshkun e freskët të egër, makaronat artizane dhe picat e pjekura në furrë druri në Rivierën Shqiptare."
  },
  heroCTA: {
    en: "Discover Our Menu",
    sq: "Zbuloni Menunë"
  },
  aboutTitle: {
    en: "Deep Mediterranean Heritage",
    sq: "Trashëgimi e Thellë Mesdhetare"
  },
  aboutSubtitle: {
    en: "Born on the Albanian Coastline",
    sq: "Lindur në Bregdetin Shqiptar"
  },
  aboutText1: {
    en: "Our tavern brings the finest culinary craftsmanship to the shore. We collaborate with local fishermen daily to select wild-caught sea bass, sea bream, octopus, and deep-sea delicacies, prepared with light fire and pure extra virgin olive oil.",
    sq: "Taverna jonë sjell mjeshtërinë më të lartë kulinare në bregdet. Ne bashkëpunojmë çdo ditë me peshkatarët lokalë për të zgjedhur levrekun, kocën, oktapodin e egër dhe delikatat e thellësive të detit."
  },
  aboutText2: {
    en: "Our kitchen honors simplicity, fresh hand-rolled doughs, traditional cornbreads, and classic wood-fired pizza using only Italian mozzarella and finest local ingredients. Each recipe is bilingual, bringing travelers and locals together.",
    sq: "Kuzhina jonë nderon thjeshtësinë, brumin e freskët të hapur me dorë, bukën tradicionale të misrit dhe picat e pjekura me dru duke përdorur vetëm mocarela italiane dhe përbërësit më të mirë vendas."
  },
  aboutPhilosophyTitle: {
    en: "Our Gastronomy Philosophy",
    sq: "Filozofia Jonë Gastronomike"
  },
  aboutPhilosophyText: {
    en: "We believe in architectural honesty on the plate. No unnecessary decorations, no masked flavors. Just pure, clean sea breeze elements, highlighted by temperature-controlled preparation, subtle heat, and masterfully paired wines.",
    sq: "Ne besojmë në thjeshtësinë dhe ndershmërinë në pjatë. Pa dekorime të panevojshme, pa shije të fshehura. Vetëm elemente të pastra të detit, të evidentuara nga përgatitja e kontrolluar, nxehtësia e matur dhe verërat e kombinuara me mjeshtëri."
  },
  menuTitle: {
    en: "Our Complete Culinary Selection",
    sq: "Përzgjedhja Jonë e Plotë Kulinare"
  },
  menuSubtitle: {
    en: "Browse our premium categories of coastal and land dishes. Sourced daily and prepared fresh to your order.",
    sq: "Eksploroni kategoritë tona premium të pjatave të detit dhe të tokës. Të furnizuara çdo ditë dhe të përgatitura të freskëta."
  },
  menuFilterAll: {
    en: "All Dishes",
    sq: "Të Gjitha"
  },
  menuFilterBreakfast: {
    en: "Breakfast (07-11 AM)",
    sq: "Mëngjesi (07-11)"
  },
  menuFilterSalads: {
    en: "Salads",
    sq: "Sallata"
  },
  menuFilterStarters: {
    en: "Starters",
    sq: "Startuese"
  },
  menuFilterSoup: {
    en: "Soup",
    sq: "Supë"
  },
  menuFilterPasta: {
    en: "Pasta",
    sq: "Pasta"
  },
  menuFilterRisotto: {
    en: "Risotto",
    sq: "Rizoto"
  },
  menuFilterSeafood: {
    en: "Seafood",
    sq: "Fruta Deti"
  },
  menuFilterWildFish: {
    en: "Wild Fish",
    sq: "Peshk i Egër"
  },
  menuFilterFish: {
    en: "Fish Portions",
    sq: "Peshk"
  },
  menuFilterMeat: {
    en: "Meat & Grill",
    sq: "Mish"
  },
  menuFilterPizza: {
    en: "Pizza",
    sq: "Pica"
  },
  recipeIngredientsLabel: {
    en: "Ingredients Included:",
    sq: "Përbërësit e Përfshirë:"
  },
  contactTitle: {
    en: "Visit or Reserve",
    sq: "Vizitoni ose Rezervoni"
  },
  contactSubtitle: {
    en: "We are nestled along the beautiful beach front. Come experience coastal dining at its peak or reach out for priority table bookings.",
    sq: "Ne jemi të vendosur përgjatë vijës së bukur bregdetare. Ejani të përjetoni kulmin e gastronomisë ose na kontaktoni për rezervime tavoline."
  },
  contactPhone: {
    en: "Phone Call",
    sq: "Telefononi"
  },
  contactWhatsApp: {
    en: "WhatsApp Chat",
    sq: "Bisedoni në WhatsApp"
  },
  contactAddress: {
    en: "Shëtitorja Wilson, Shëngjin 4503, Albania",
    sq: "Shëtitorja Wilson, Shëngjin 4503, Albania"
  },
  contactHours: {
    en: "Opening Hours",
    sq: "Orari i Hapjes"
  },
  contactHoursWeekdays: {
    en: "Monday - Sunday: 07:00 AM - 12:00 PM",
    sq: "E Hënë - E Diel: 07:00 - 12:00"
  },
  contactHoursWeekend: {
    en: "Breakfast Served: 07:00 AM - 11:00 AM Daily",
    sq: "Mëngjesi Shërbehet: 07:00 - 11:00 Çdo Ditë"
  },
  reservationTitle: {
    en: "Instant Priority Table Reservation",
    sq: "Rezervim i Menjëhershëm i Tavolinës"
  },
  reservationText: {
    en: "Book your sea-view table instantly. Simply click to dial our host or send an automated message directly to our WhatsApp reservation line.",
    sq: "Rezervoni tavolinën tuaj me pamje nga deti menjëherë. Thjesht klikoni për të telefonuar pritësin tonë ose dërgoni një mesazh direkt në linjën tonë të WhatsApp."
  },
  reservationCTAWhatsApp: {
    en: "Book via WhatsApp",
    sq: "Rezervo me WhatsApp"
  },
  reservationCTAPhone: {
    en: "Call for Booking",
    sq: "Telefono për Rezervim"
  },
  footerRights: {
    en: "All rights reserved. Designed with elegant minimalism.",
    sq: "Të gjitha të drejtat të rezervuara. Gatuar dhe dizajnuar me minimalizëm elegant."
  },
  footerTagline: {
    en: "Taste the deep soul of the sea.",
    sq: "Shijoni shpirtin e thellë të detit."
  }
};
