export const location = {
    inserted: (el, binding) => {

        let init = () => {
            let autocomplete = el;

            autocomplete = new google.maps.places.Autocomplete(
                (autocomplete),
                // {
                //     types: ['(cities)']
                // }
                );
            autocomplete.addListener('place_changed', () => {

                let place = autocomplete.getPlace();

                let data = {
                    country_code: null,
                    city: place.name,
                    location: place.formatted_address,
                };

                for (let addressComponent of place.address_components) {
                    if (addressComponent.types && addressComponent.types.includes('country')) {
                        data.country_code = addressComponent.short_name;
                    }
                }

                binding.value.callback(data);
            });
        };

        try {
            init();
        }
        catch (e) {
            let js = document.createElement('script');
            js.onload = () => {
                init();
            };
            js.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCmogL0RunjXzhgLEqFX0YLvwlQ9fG_hyY&amp;libraries=places";
            document.head.appendChild(js);
        }
    }
};
