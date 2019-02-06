export const changePageTitle = (title) => {
    return {
        type:"PAGE_TITLE_CHANGE",
        payload:{
            title
        }
    }
}

export const changeFooter = () => {
    return {
        type:"PAGE_FOOTER_CHANGE",
        payload:{
            footer:"Copyright &nbsp; Yudhistira Group"
        }
    }
}