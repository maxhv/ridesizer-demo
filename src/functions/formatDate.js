// = get formatted date mm yyyy =
const formatDate = (date = new Date()) => {

    let formatted;

    if (date) {

        let y = date.getFullYear();

        const month = date.getMonth() + 1;

        formatted = {"month" : month, "year" : y};
    }

    return formatted;
}

export default formatDate;