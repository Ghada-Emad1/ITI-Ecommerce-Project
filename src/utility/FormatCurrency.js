const CurrentFormat=Intl.NumberFormat('en-Us',{
    currency:'USD',
    style:"currency"
})
export const FormatCurrency=(number)=>{
    return CurrentFormat.format(number);
}