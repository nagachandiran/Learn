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
    date: function(frm) {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const date = frm.doc.date;
        const dayOfWeek = (new Date(date)).getDay();
        const day = days[dayOfWeek];
        frm.set_value("day", day);
    }

});

