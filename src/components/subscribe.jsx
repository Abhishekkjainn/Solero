function SubscribetoEmail() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-48 mb-16 bg-slate-900 w-96 rounded-[30px] flex justify-around items-center flex-col">
        <div className="pt-6 pl-6 font-semibold text-white">
          Subscribe to Newsletter
        </div>
        <div class="relative mt-0 pr-0 pl-0">
          <input
            type="email"
            placeholder="Email address"
            autocomplete="email"
            aria-label="Email address"
            class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-slate-200 focus:outline-none focus:ring-neutral-950/5"
          />
          <div class="absolute inset-y-1 right-1 flex justify-end mr-0">
            <button
              type="submit"
              aria-label="Submit"
              class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribetoEmail;
