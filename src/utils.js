export default function formatCurrency(num)
{
    return  "GHS " + Number(num.toFixed(2)).toLocaleString()+ " ";
}

