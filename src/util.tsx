export default {
    formatDate: (date: string | number) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        return new Date(date).toLocaleDateString(navigator.language, options);
    },
    formatTime: (time: string | number) => {
        const options = {
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(time).toLocaleTimeString(navigator.language, options);
    },
    getId: function(prefix: string) {
        return `${prefix}-${this.makeid()}`
    },
    makeid: () => {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for ( var i = 0; i < 6; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return result;
    }
}