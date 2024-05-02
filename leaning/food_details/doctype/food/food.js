// frappe.ui.form.on("Food", {
//     day: function(frm) {
//         const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//         const date = frm.doc.date;
//         const dayOfWeek = (new Date(date)).getDay();
//         const day = days[dayOfWeek];
//         console.log(day);
//     }
// });




frappe.ui.form.on("Food", {
    onload: function(frm) {
        day(frm)
    },
    date: function(frm){
        day(frm)
    }
});

function day(frm){
    if(frm.doc.date){
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = frm.doc.date;
        const dayOfWeek = (new Date(date)).getDay();
        const day = days[dayOfWeek];
        frm.set_value("day", day);

        if (day) {
            if(day =="Monday"){
                frm.set_value("plate_price", 85);
            }
            
        }
    }
    else{
        frm.set_value("day", null);
    }
}
