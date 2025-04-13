import firstShade from '../assets/first-shade.png';

export default function Home() {
  return (
    <>
      <div id="wrapper" class="flex pt-20 gap-14 lg:px-20">
        <div id="textbox-wrapper" class="w-3/5">
          <p class="pt-6 italic font-special text-2xl/10 font-light">
            Behind every great pair of sunglasses is a great nap waiting to
            happen.
          </p>
          <p class="mt-10 font-black text-5xl/16 ">
            Specialized in stylish cover —and power naps..zzZ
          </p>
          <button class="mt-14 btn-primary md:text-xl md:py-5 md:px-8">
            Explore our collection
          </button>
        </div>

            <img 
          class="w-2/5 border-2 border-blue-900 h-100 object-contain bg-white" src={firstShade} alt="Black sunglasses"/>

      </div>
    </>
  );
}
