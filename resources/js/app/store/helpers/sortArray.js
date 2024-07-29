export const sortArray = (arr, selectedSort) => {
    switch (selectedSort) {
        case 'id':
            return arr.sort((itemA, itemB) => itemA.id - itemB.id);
        case 'idReverse':
            return arr.sort((itemA, itemB) => itemB.id - itemA.id);
        case 'date':
            return arr.sort((itemA, itemB) => {
                const dateA = new Date(itemA.date);
                const dateB = new Date(itemB.date);

                return dateA - dateB;
            });
        case 'dateReverse':
            return arr.sort((itemA, itemB) => {
                const dateA = new Date(itemA.date);
                const dateB = new Date(itemB.date);

                return dateB - dateA;
            });
        default:
            return arr;
    }
}
