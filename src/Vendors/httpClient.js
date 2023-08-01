export async function httpClient() {
    return await fetch('./curriculumVitaeData.js')
        .then(apiResponse => apiResponse.json())
        .then(response => {
            return response[0];
        });
}
