const allCharacters = [
    { id: 'Ch001', name: 'Izuku Midoriya', file: 'T_ui_com_cahraface_Ch001.png' },
    { id: 'Ch002', name: 'Katsuki Bakugo', file: 'T_ui_com_cahraface_Ch002.png' },
    { id: 'Ch003', name: 'Ochaco Uraraka', file: 'T_ui_com_cahraface_Ch003.png' },
    { id: 'Ch004', name: 'Shoto Todoroki', file: 'T_ui_com_cahraface_Ch004.png' },
    { id: 'Ch005', name: 'Tenya Iida', file: 'T_ui_com_cahraface_Ch005.png' },
    { id: 'Ch006', name: 'Tsuyu Asui', file: 'T_ui_com_cahraface_Ch006.png' },
    { id: 'Ch007', name: 'Denki Kaminari', file: 'T_ui_com_cahraface_Ch007.png' },
    { id: 'Ch008', name: 'Ejiro Kirishima', file: 'T_ui_com_cahraface_Ch008.png' },
    { id: 'Ch010', name: 'Momo Yaoyorozu', file: 'T_ui_com_cahraface_Ch010.png' },
    { id: 'Ch011', name: 'Fumikage Tokoyami', file: 'T_ui_com_cahraface_Ch011.png' },
    { id: 'Ch012', name: 'All Might', file: 'T_ui_com_cahraface_Ch012.png' },
    { id: 'Ch013', name: 'Shota Aizawa', file: 'T_ui_com_cahraface_Ch013.png' },
    { id: 'Ch015', name: 'Tomura Shigaraki', file: 'T_ui_com_cahraface_Ch015.png' },
    { id: 'Ch016', name: 'All For One', file: 'T_ui_com_cahraface_Ch016.png' },
    { id: 'Ch017', name: 'Dabi', file: 'T_ui_com_cahraface_Ch017.png' },
    { id: 'Ch018', name: 'Himiko Toga', file: 'T_ui_com_cahraface_Ch018.png' },
    { id: 'Ch023', name: 'Endeavor', file: 'T_ui_com_cahraface_Ch023.png' },
    { id: 'Ch024', name: 'Mirio Togata', file: 'T_ui_com_cahraface_Ch024.png' },
    { id: 'Ch025', name: 'Nejire Hado', file: 'T_ui_com_cahraface_Ch025.png' },
    { id: 'Ch026', name: 'Tamaki Amajiki', file: 'T_ui_com_cahraface_Ch026.png' },
    { id: 'Ch034', name: 'Overhaul', file: 'T_ui_com_cahraface_Ch034.png' },
    { id: 'Ch037', name: 'Twice', file: 'T_ui_com_cahraface_Ch037.png' },
    { id: 'Ch038', name: 'Mr. Compress', file: 'T_ui_com_cahraface_Ch038.png' },
    { id: 'Ch043', name: 'Hawks', file: 'T_ui_com_cahraface_Ch043.png' },
    { id: 'Ch046', name: 'Itsuka Kendo', file: 'T_ui_com_cahraface_Ch046.png' },
    { id: 'Ch100', name: 'Mt. Lady', file: 'T_ui_com_cahraface_Ch100.png' },
    { id: 'Ch101', name: 'Cementoss', file: 'T_ui_com_cahraface_Ch101.png' },
    { id: 'Ch102', name: 'Ibara Shiozaki', file: 'T_ui_com_cahraface_Ch102.png' },
    { id: 'Ch103', name: 'Kurogiri', file: 'T_ui_com_cahraface_Ch103.png' },
    { id: 'Ch104', name: 'Neito Monoma', file: 'T_ui_com_cahraface_Ch104.png' },
    { id: 'Ch105', name: 'Hitoshi Shinso', file: 'T_ui_com_cahraface_Ch105.png' },
    { id: 'Ch109', name: 'Present Mic', file: 'T_ui_com_cahraface_Ch109.png' },
    { id: 'Ch114', name: 'Star and Stripe', file: 'T_ui_com_cahraface_Ch114.png' },
    { id: 'Ch115', name: 'Lady Nagant', file: 'T_ui_com_cahraface_Ch115.png' },
    { id: 'Ch200', name: 'Armored All Might', file: 'T_ui_com_cahraface_Ch200.png' },
    { id: 'Ch201', name: 'All For One <Youth Age>', file: 'T_ui_com_cahraface_Ch201.png' },
    { id: 'Ch202', name: 'Izuku Midoriya OFA', file: 'T_ui_com_cahraface_Ch202.png' },
    { id: 'T_ui_Thumb_13_101_S', name: 'Full Bullet', file: 'T_ui_Thumb_13_101_S.png' },
    { id: 'T_ui_Thumb_13_1201_S', name: 'Gatling', file: 'T_ui_Thumb_13_1201_S.png' },
    { id: 'T_ui_Thumb_13_1501_S', name: 'Catastrophe', file: 'T_ui_Thumb_13_1501_S.png' },
    { id: 'T_ui_Thumb_13_1502_S', name: 'Thousand-Hand Break', file: 'T_ui_Thumb_13_1502_S.png' },
    { id: 'T_ui_Thumb_13_1601_S', name: 'Factor Fusion', file: 'T_ui_Thumb_13_1601_S.png' },
    { id: 'T_ui_Thumb_13_1701_S', name: 'Crazy Touch', file: 'T_ui_Thumb_13_1701_S.png' },
    { id: 'T_ui_Thumb_13_1801_S', name: 'Sting Dance', file: 'T_ui_Thumb_13_1801_S.png' },
    { id: 'T_ui_Thumb_13_201_S', name: 'Machine Gun', file: 'T_ui_Thumb_13_201_S.png' },
    { id: 'T_ui_Thumb_13_202_S', name: 'Cluster', file: 'T_ui_Thumb_13_202_S.png' },
    { id: 'T_ui_Thumb_13_2301_S', name: 'Inferno Fist', file: 'T_ui_Thumb_13_2301_S.png' },
    { id: 'T_ui_Thumb_13_2401_S', name: 'Sheer Counter', file: 'T_ui_Thumb_13_2401_S.png' },
    { id: 'T_ui_Thumb_13_2501_S', name: 'Fairy', file: 'T_ui_Thumb_13_2501_S.png' },
    { id: 'T_ui_Thumb_13_301_S', name: 'Zero Satellites', file: 'T_ui_Thumb_13_301_S.png' },
    { id: 'T_ui_Thumb_13_3401_S', name: 'Blighted Precipice', file: 'T_ui_Thumb_13_3401_S.png' },
    { id: 'T_ui_Thumb_13_401_S', name: 'Ice Fang Wind Flame', file: 'T_ui_Thumb_13_401_S.png' },
    { id: 'T_ui_Thumb_13_4301_S', name: 'Slicing Wind', file: 'T_ui_Thumb_13_4301_S.png' },
    { id: 'T_ui_Thumb_13_4601_S', name: 'Twin Palm Strike', file: 'T_ui_Thumb_13_4601_S.png' },
    { id: 'T_ui_Thumb_13_701_S', name: 'Lightning', file: 'T_ui_Thumb_13_701_S.png' },
    { id: 'T_ui_Thumb_13_801_S', name: 'Red Drive', file: 'T_ui_Thumb_13_801_S.png' },
];

const ownedIds = new Set(allCharacters.map(c => c.id));

function populateGrid() {
    const grid = document.getElementById('character-grid');
    allCharacters.forEach(char => {
        const div = document.createElement('div');
        div.className = 'character-icon';
        const img = document.createElement('img');
        img.src = `images/${char.file}`;
        img.alt = char.name;
        div.appendChild(img);
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        div.appendChild(overlay);
        div.addEventListener('click', () => {
            if (ownedIds.has(char.id)) {
                ownedIds.delete(char.id);
                overlay.style.display = 'block';
            } else {
                ownedIds.add(char.id);
                overlay.style.display = 'none';
            }
        });
        grid.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', populateGrid);

document.getElementById('pick-button').addEventListener('click', () => {
    const owned = allCharacters.filter(c => ownedIds.has(c.id));
    if (owned.length === 0) {
        document.getElementById('result').innerText = 'No owned characters';
        return;
    }
    const randomIndex = Math.floor(Math.random() * owned.length);
    const randomChar = owned[randomIndex];
    document.getElementById('result').innerText = `Picked: ${randomChar.name}`;
});