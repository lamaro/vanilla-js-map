const $listado = document.querySelector('#listado');
const $form_field_lat = document.querySelector('#form_field_lat');
const $form_field_lng = document.querySelector('#form_field_lng');
const $form_field_name = document.querySelector('#form_field_name');
const $form_field_description = document.querySelector('#form_field_description');
const $form_field_type = document.querySelector('#form_field_type');

const dataRow = props => {
    const { _id, lat, lng, name, description, type } = props
    return `
        <div class="item">
            <div class="listado_content">
                <h2>${name}</h2>
            </div>
            <div class="btns_wrapper">
                <a href="#" data-id="${_id}" class="btn verde handleEdit">Editar</a>
                <a href="#" data-id="${_id}" class="btn rojo handleDelete">Eliminar</a>
            </div>
        </div>
    `
}

const getCervecerias = async (id = '') => {
    const result = await api.getCervecerias();
    console.log(result)
    if (id == '') { //Cuando la llama el document ready
        $listado.innerHTML = '';
        result.forEach(element => {
            $listado.innerHTML += dataRow(element)
        });
    } else { //Cuando la llamo con un id desde edit
        const elementByID = result.find(el => id == el._id)
        return elementByID
    }
}

getCervecerias();


const deleteCerveceria = async (id) => {
    const result = await api.deleteCervecerias(id);
    console.log('Deleted')
    getCervecerias();
}

const completeForm = (reg) => {
    const { lat, lng, name, description, type } = reg;
    $form_field_lat.value = lat
    $form_field_lng.value = lng
    $form_field_name.value = name
    $form_field_description.value = description
    $form_field_type.value = type
}

document.addEventListener('click', async function () {
    event.preventDefault();
    //Handle Delete
    if (event.target.matches('.handleDelete')) {
        const id = event.target.dataset.id;
        console.log('click en un boton delete', id);
        deleteCerveceria(id);
    }

    //Handle Edit
    if (event.target.matches('.handleEdit')) {
        const id = event.target.dataset.id;
        console.log('click en un boton edit', id);
        const reg = await getCervecerias(id);
        completeForm(reg)
    }

}, false)

