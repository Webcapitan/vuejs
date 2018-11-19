export const urlMixin = {
    methods: {

        // getFileUrl(url){
        //
        //     return `/storage/${url}`;
        // },

        getThumbnail(origUrl, width, height = null){

            let re = /(?:\.([^.]+))?$/;
            return `/thumbnails/${btoa(origUrl)}/${width}_${height || 0}${re.exec(origUrl)[0]}`;
        },
    },
};