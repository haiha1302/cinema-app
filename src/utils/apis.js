import http from './http'

export const getDataHomepage = async () => {
    const configApi = {
        params: {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
        }
    }

    const results = await Promise.all([
        http('/trending/all/day'),
        http('/discover/movie', configApi),
        http('/discover/tv', configApi)
    ])
    
    return results
}

export const getDataMovies = async page => {
    const data = await http.get('/discover/movie', {
        params: {
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: false,
            include_video: false,
            page: page
        }
    })

    return data
}

export const getMovieDetails = async (media_type, id) => {
    const labels = ["data", "casts", "similar", "videos"];
  
    const result = (
        await Promise.all([
            http.get(`/${media_type}/${id}`),
            http.get(`/${media_type}/${id}/credits`),
            http.get(`/${media_type}/${id}/similar`),
            http.get(`/${media_type}/${id}/videos`),
        ])
    )
    .reduce((final, current, index) => {
        if (labels[index] === "data") {
            final[labels[index]] = current.data;
        } else if (labels[index] === "casts") {
            final[labels[index]] = current.data.cast
            .filter(item => item.name && item.character && item.profile_path)
            .slice(0, 10);
        } else if (labels[index] === "similar") {
            final[labels[index]] = current.data.results.map(item => ({
                ...item,
                media_type: "movie",
            }));
        } else if (labels[index] === "videos") {
            final[labels[index]] = current.data.results.filter(item => item.name && item.site === "YouTube"
            );
        }

        return final;
    });

    return result;
};

export const getGenres = async () => {
    const results = await Promise.all([
        http.get('/genre/movie/list'),
        http.get('/genre/tv/list')
    ])
    
    const mergeGenres = Array.from(new Set([...results[0].data.genres, ...results[1].data.genres]))

    const genres = [...new Map(mergeGenres.map(genre => [JSON.stringify(genre), genre])).values()]
    
    return genres
}