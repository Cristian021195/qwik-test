import { component$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
const state = useStore({cont:0});
  return (
    <>
        <h1>Contacto</h1>
        <button onClick$={()=>state.cont++}>Click N° {state.cont}</button>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Contacto',
};
