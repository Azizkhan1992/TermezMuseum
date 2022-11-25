<template>
  <div
    class="icon"
    :class="this.color"
  >
    <svg v-if="this.size == 'sm'" width="16" height="16" viewBox="0 0 24 24" fill="none" v-html="chosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg v-else-if="this.size == 'middle'" width="20" height="20" viewBox="0 0 24 24" fill="none" v-html="chosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg v-else-if="this.size == '32'" width="32" height="32" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg v-else-if="this.size == 'large'" width="36" height="36" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg v-else-if="this.size == '48'" width="48" height="48" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg v-else width="24" height="24" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
  </div>
</template>

<script>
export default {
  name: 'chosenIcon',

  data() {
    return {
      icons: {
        calendar: `
          <path d="M8 2V5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 2V5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M3.5 9.09009H20.5" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.6947 13.7H15.7037" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.6947 16.7H15.7037" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 13.7H12.0045" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 16.7H12.0045" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.29431 13.7H8.30329" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.29431 16.7H8.30329" stroke="#A4ABBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        search: `
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 22L20 20" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        phone: `
          <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10"/>
          <path opacity="0.4" d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 9C22 5.13 18.87 2 15 2" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        clock: `
          <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        closeCircle: `
          <path d="M6 18L18 6" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 18L6 6" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        closeFilled: `
          <path d="M12 22.5C17.775 22.5 22.5 17.775 22.5 12C22.5 6.225 17.775 1.5 12 1.5C6.225 1.5 1.5 6.225 1.5 12C1.5 17.775 6.225 22.5 12 22.5Z" fill="white"/>
          <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        searchClose: `
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        dislike:`
          <path opacity="0.4" d="M16.5197 5.65039L13.4197 3.25039C13.0197 2.85039 12.1197 2.65039 11.5197 2.65039H7.71973C6.51973 2.65039 5.21973 3.55039 4.91973 4.75039L2.51973 12.0504C2.01973 13.4504 2.91973 14.6504 4.41973 14.6504H8.41973C9.01973 14.6504 9.51973 15.1504 9.41973 15.8504L8.91973 19.0504C8.71973 19.9504 9.31973 20.9504 10.2197 21.2504C11.0197 21.5504 12.0197 21.1504 12.4197 20.5504L16.5197 14.4504" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M21.6198 5.65049V15.4505C21.6198 16.8505 21.0198 17.3505 19.6198 17.3505H18.6198C17.2198 17.3505 16.6198 16.8505 16.6198 15.4505V5.65049C16.6198 4.25049 17.2198 3.75049 18.6198 3.75049H19.6198C21.0198 3.75049 21.6198 4.25049 21.6198 5.65049Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        download: `
          <path d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
          <path d="M12 2V14.88" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.3504 12.6504L12.0004 16.0004L8.65039 12.6504" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>`
        ,
        driver: `
          <path d="M19.32 10H4.69002C3.21002 10 2.01001 8.79002 2.01001 7.32002V4.69002C2.01001 3.21002 3.22002 2.01001 4.69002 2.01001H19.32C20.8 2.01001 22 3.22002 22 4.69002V7.32002C22 8.79002 20.79 10 19.32 10Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.32 22H4.69002C3.21002 22 2.01001 20.79 2.01001 19.32V16.69C2.01001 15.21 3.22002 14.01 4.69002 14.01H19.32C20.8 14.01 22 15.22 22 16.69V19.32C22 20.79 20.79 22 19.32 22Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M6 5V7" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M10 5V7" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M6 17V19" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M10 17V19" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M14 6H18" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M14 18H18" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        eye: `
          <path opacity="0.4" d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        glasses: `
          <path opacity="0.4" d="M10 17.5H14" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 15.9101V19.2001C10 21.2001 9.2 22.0001 7.2 22.0001H4.8C2.8 22.0001 2 21.2001 2 19.2001V15.9101C2 13.9101 2.8 13.1101 4.8 13.1101H7.2C9.2 13.1101 10 13.9101 10 15.9101Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 15.9101V19.2001C22 21.2001 21.2 22.0001 19.2 22.0001H16.8C14.8 22.0001 14 21.2001 14 19.2001V15.9101C14 13.9101 14.8 13.1101 16.8 13.1101H19.2C21.2 13.1101 22 13.9101 22 15.9101Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        globus: `
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
          <path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>`
        ,
        home: `
          <path d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.34" d="M12 17.99V14.99" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        like: `
          <path opacity="0.4" d="M7.47998 18.3505L10.58 20.7505C10.98 21.1505 11.88 21.3505 12.48 21.3505H16.28C17.48 21.3505 18.78 20.4505 19.08 19.2505L21.48 11.9505C21.98 10.5505 21.08 9.35046 19.58 9.35046H15.58C14.98 9.35046 14.48 8.85046 14.58 8.15046L15.08 4.95046C15.28 4.05046 14.68 3.05046 13.78 2.75046C12.98 2.45046 11.98 2.85046 11.58 3.45046L7.47998 9.55046" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M2.38 18.3504V8.55039C2.38 7.15039 2.98 6.65039 4.38 6.65039H5.38C6.78 6.65039 7.38 7.15039 7.38 8.55039V18.3504C7.38 19.7504 6.78 20.2504 5.38 20.2504H4.38C2.98 20.2504 2.38 19.7504 2.38 18.3504Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        link: `
          <path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        location: `
          <path opacity="0.4" d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="#A4ABBD" stroke-width="1.5"/>
          <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#A4ABBD" stroke-width="1.5"/>`
        ,
        burgerMenu: `
          <path d="M3 7H21" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round"/>
          <path opacity="0.34" d="M6 12L21 12" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M9 17L21 17" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round"/>`
        ,
        play: `
          <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        profile: `
          <path opacity="0.4" d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        refresh: `
          <path d="M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M21.89 12C21.89 17.52 17.41 22 11.89 22C6.37 22 3 16.44 3 16.44M3 16.44H7.52M3 16.44V21.44" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        zoomIn: `
          <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
          <path d="M8.5 11H13.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 13.5V8.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <path opacity="0.4" d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        zoomOut: `
          <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M8.5 11H13.5" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        share: `
          <path opacity="0.34" d="M16.96 6.16992C18.96 7.55992 20.34 9.76992 20.62 12.3199" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.34" d="M3.48999 12.37C3.74999 9.82997 5.10999 7.61997 7.08999 6.21997" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.34" d="M8.18994 20.9399C9.34994 21.5299 10.6699 21.8599 12.0599 21.8599C13.3999 21.8599 14.6599 21.5599 15.7899 21.0099" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.06 7.69989C13.5954 7.69989 14.84 6.45524 14.84 4.91989C14.84 3.38454 13.5954 2.13989 12.06 2.13989C10.5247 2.13989 9.28003 3.38454 9.28003 4.91989C9.28003 6.45524 10.5247 7.69989 12.06 7.69989Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.83005 19.9201C6.3654 19.9201 7.61005 18.6755 7.61005 17.1401C7.61005 15.6048 6.3654 14.3601 4.83005 14.3601C3.2947 14.3601 2.05005 15.6048 2.05005 17.1401C2.05005 18.6755 3.2947 19.9201 4.83005 19.9201Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.17 19.9201C20.7054 19.9201 21.95 18.6755 21.95 17.1401C21.95 15.6048 20.7054 14.3601 19.17 14.3601C17.6347 14.3601 16.39 15.6048 16.39 17.1401C16.39 18.6755 17.6347 19.9201 19.17 19.9201Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        sitemap: `
          <path opacity="0.4" d="M12 12H6.73686C5.57415 12 4.63159 13.1193 4.63159 14.5M12 12H17.2632C18.4259 12 19.3684 13.1193 19.3684 14.5M12 12C12 10.6193 12.9426 9.5 14.1053 9.5H14.6316C15.7943 9.5 16.7369 8.38071 16.7369 7V4.5C16.7369 3.11929 15.7943 2 14.6316 2H9.36843C8.20573 2 7.26317 3.11929 7.26317 4.5V7C7.26317 8.38071 8.20573 9.5 9.36843 9.5H10.4211M12 12V14.5M10.125 4.14286H13.875M10.125 7H13.875" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.36842 17.3125C9.36842 16.4496 9.95752 15.75 10.6842 15.75H13.3158C14.0425 15.75 14.6316 16.4496 14.6316 17.3125V20.4375C14.6316 21.3004 14.0425 22 13.3158 22H10.6842C9.95752 22 9.36842 21.3004 9.36842 20.4375V17.3125Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.7368 17.3125C16.7368 16.4496 17.3259 15.75 18.0526 15.75H20.6842C21.4109 15.75 22 16.4496 22 17.3125V20.4375C22 21.3004 21.4109 22 20.6842 22H18.0526C17.3259 22 16.7368 21.3004 16.7368 20.4375V17.3125Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17.3125C2 16.4496 2.5891 15.75 3.31579 15.75H5.94737C6.67406 15.75 7.26316 16.4496 7.26316 17.3125V20.4375C7.26316 21.3004 6.67406 22 5.94737 22H3.31579C2.5891 22 2 21.3004 2 20.4375V17.3125Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        mail: `
          <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        author: `
          <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9999 10.0001C13.2868 10.0001 14.33 8.95687 14.33 7.67004C14.33 6.38322 13.2868 5.34009 11.9999 5.34009C10.7131 5.34009 9.66992 6.38322 9.66992 7.67004C9.66992 8.95687 10.7131 10.0001 11.9999 10.0001Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M16 15.6599C16 13.8599 14.21 12.3999 12 12.3999C9.79 12.3999 8 13.8599 8 15.6599" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        vr: `
          <path d="M2 10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H16.132C15.7866 19 15.4471 18.9106 15.1466 18.7404C14.8461 18.5702 14.5947 18.3252 14.417 18.029L12.857 15.429C12.7681 15.2811 12.6425 15.1588 12.4923 15.0739C12.3421 14.989 12.1725 14.9443 12 14.9443C11.8275 14.9443 11.6579 14.989 11.5077 15.0739C11.3575 15.1588 11.2319 15.2811 11.143 15.429L9.583 18.029C9.40531 18.3252 9.15395 18.5702 8.8534 18.7404C8.55286 18.9106 8.21337 19 7.868 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V10Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M5.25327 5.4735C4.67291 5.78418 4.17819 6.23329 3.813 6.781L3 8H21L20.186 6.781C19.8207 6.23315 19.3258 5.78395 18.7453 5.47326C18.1647 5.16257 17.5165 5.00001 16.858 5H7.14C6.48171 5.00018 5.83364 5.16282 5.25327 5.4735Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        arrDown: `
          <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07996 8.94995" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>`
        ,
        arrUp: `
          <path d="M4.07996 16.0477L10.6 9.5277C11.37 8.7577 12.63 8.7577 13.4 9.5277L19.92 16.0477" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        arrRight: `
          <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        arrLeft: `
          <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        tailArrRight: `
          <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.5 12H20.33" stroke="#A4ABBD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        `,
        bus: `
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.47264C0 5.75 0.5 5.25 1.22293 5.25H21.1696C21.1696 5.25 21.1696 5.25 21.5705 5.31754L22.1891 5.53214C22.4697 5.6294 22.705 5.82526 22.8515 6.08324L23.1465 6.60182C23.2221 6.73526 23.2723 6.88179 23.2938 7.03374L24 12V16.1009C24 16.7762 23.4526 17.3236 22.7771 17.3236H21.9713C21.9825 17.2598 21.9912 17.1953 21.998 17.1301L22.0052 17.048C22.008 17.0124 22.01 16.9766 22.0111 16.9406L22.0119 16.9029L22.0127 16.8396C22.0127 15.2781 20.7464 14.0123 19.1847 14.0123C17.623 14.0123 16.3567 15.2781 16.3567 16.8396C16.3567 17.0046 16.371 17.1663 16.3981 17.3236H6.5828C6.60987 17.1663 6.6242 17.0046 6.6242 16.8396C6.6242 15.2781 5.35788 14.0123 3.79618 14.0123C2.23447 14.0123 0.968153 15.2781 0.968153 16.8396C0.968153 16.9978 0.98129 17.1534 1.00637 17.3045C0.434315 17.2023 0 16.7023 0 16.1009V6.47264ZM1.07006 7.03302C1.07006 6.69539 1.34395 6.4217 1.68153 6.4217H5.50318V10.8028H1.07006V7.03302ZM10.9554 6.4217H6.52229V10.8028H10.9554V6.4217ZM12.0255 6.4217H16.4586V10.8028H12.0255V6.4217ZM21.2229 6.4217H17.4777V10.8028L19.1338 12.4075H22.9299L22.1656 7.21132C22.1656 7.21132 22.1146 6.90566 21.8344 6.65094C21.5541 6.39623 21.2229 6.4217 21.2229 6.4217Z" fill="#A4ABBD"/>
          <path d="M5.75796 16.8142C5.75796 17.8833 4.89105 18.75 3.82166 18.75C2.75226 18.75 1.88535 17.8833 1.88535 16.8142C1.88535 15.745 2.75226 14.8783 3.82166 14.8783C4.89105 14.8783 5.75796 15.745 5.75796 16.8142Z" fill="#A4ABBD"/>
          <path d="M21.0955 16.8142C21.0955 17.8833 20.2286 18.75 19.1592 18.75C18.0898 18.75 17.2229 17.8833 17.2229 16.8142C17.2229 15.745 18.0898 14.8783 19.1592 14.8783C20.2286 14.8783 21.0955 15.745 21.0955 16.8142Z" fill="#A4ABBD"/>
        `,
        oriental: `
          <g clip-path="url(#clip0_1431_71857)">
          <path d="M9.76882 2.5308C9.76882 2.19048 10.0348 1.9094 10.3748 1.89037L20.0027 1.35175C20.179 1.34189 20.3516 1.40504 20.4798 1.52634L23.2838 4.17877C23.5535 4.43393 23.5509 4.86393 23.278 5.11578L20.4766 7.7017C20.3501 7.81844 20.1821 7.87951 20.0101 7.8712L10.3797 7.4059C10.0376 7.38938 9.76882 7.10743 9.76882 6.76523V2.5308Z" fill="#A4ABBD"/>
          <path d="M14.2312 10.16C14.2312 9.81968 13.9652 9.5386 13.6252 9.51958L3.99729 8.98096C3.821 8.9711 3.64842 9.03425 3.52019 9.15555L0.716239 11.808C0.4465 12.0631 0.44913 12.4931 0.721968 12.745L3.5234 15.3309C3.64986 15.4476 3.81794 15.5087 3.98989 15.5004L13.6203 15.0351C13.9624 15.0186 14.2312 14.7366 14.2312 14.3944V10.16Z" fill="#A4ABBD"/>
          <path d="M11.0525 8.01782L12.978 8.12472V8.87305L11.0525 8.76615V8.01782Z" fill="#A4ABBD"/>
          <path d="M11.0525 15.7951L12.978 15.608V19.9911L11.0525 20.1514V15.7951Z" fill="#A4ABBD"/>
          <path d="M6.72009 23.2066C6.72009 22.957 6.86496 22.73 7.09145 22.6249L11.1378 20.7457C11.2225 20.7064 11.3149 20.686 11.4083 20.686H12.6222C12.7157 20.686 12.808 20.7064 12.8927 20.7457L16.9391 22.6249C17.1655 22.73 17.3104 22.957 17.3104 23.2066V23.3586C17.3104 23.7128 17.0231 24 16.6686 24H7.36193C7.00745 24 6.72009 23.7128 6.72009 23.3586V23.2066Z" fill="#A4ABBD"/>
          <path d="M11.0525 0.855234C11.0525 0.855234 11.1327 0 12.0153 0C12.8978 0 12.978 0.855234 12.978 0.855234V1.14922L11.0525 1.28285V0.855234Z" fill="#A4ABBD"/>
          </g>
          <defs>
          <clipPath id="clip0_1431_71857">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        `,
        subway: `
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31965 0C6 0 3.58981 4.5 3.58828 9.11719C3.58755 11.3287 3.58755 13.6044 3.58755 15.3291C3.58791 16.9338 4.89037 18.2344 6.49718 18.2344H17.5281C19.1353 18.2344 20.4381 16.9334 20.4381 15.3283V9.11719C20.4381 4.5 18 0 16.7288 0H7.31965ZM8.12929 1.07812C7.5 1.07812 5.04181 5.5 5.04218 7.125L5.04181 9.75149C5.04181 10.5278 5.67214 11.1562 6.44951 11.1562H17.5736C18.3513 11.1562 18.9817 10.5271 18.9817 9.75043V7.125C19 5.5 16.5 1.07812 15.9132 1.07812H8.12929ZM8.3273 14.7891C8.3273 15.5269 7.7285 16.125 6.98964 16.125C6.25077 16.125 5.65198 15.5269 5.65198 14.7891C5.65198 14.0512 6.25077 13.4531 6.98964 13.4531C7.7285 13.4531 8.3273 14.0512 8.3273 14.7891ZM17.0338 16.125C17.7727 16.125 18.3715 15.5269 18.3715 14.7891C18.3715 14.0512 17.7727 13.4531 17.0338 13.4531C16.295 13.4531 15.6962 14.0512 15.6962 14.7891C15.6962 15.5269 16.295 16.125 17.0338 16.125Z" fill="#A4ABBD"/>
          <path d="M9.1252 4.03125H10.6271V4.21875L12.0821 5.83594L13.5371 4.21875V4.03125H15.0391V9.09375H13.5371V6.23438L12.0821 7.85156L10.6271 6.23438V9.09375H9.1252V4.03125Z" fill="#A4ABBD"/>
          <path d="M6.91923 18.2344H8.91399L5.01835 24H2.90625L6.91923 18.2344Z" fill="#A4ABBD"/>
          <path d="M17.0808 18.2344H15.086L18.9817 24H21.0938L17.0808 18.2344Z" fill="#A4ABBD"/>
          <path d="M8.32725 19.0781H15.6727L16.2359 19.7344H7.88141L8.32725 19.0781Z" fill="#A4ABBD"/>
          <path d="M6.61487 21.375H17.8394L18.7 22.4531H5.93359L6.61487 21.375Z" fill="#A4ABBD"/> 
        `,
        facebook: `
          <path d="M13.3809 12.2896H16.4827L16.9697 8.81615H13.3803V6.91775C13.3803 5.47482 13.808 4.1953 15.0324 4.1953H17V1.16411C16.6543 1.11265 15.9232 1 14.5416 1C11.6568 1 9.96556 2.67936 9.96556 6.50538V8.81615H7V12.2896H9.96556V21.8366C10.5529 21.9339 11.1477 22 11.7584 22C12.3104 22 12.8491 21.9444 13.3809 21.8651V12.2896Z" fill="#A4ABBD"/>
        `,
        instagram: `
          <path d="M12 3.80723C14.6506 3.80723 15.0121 3.80723 16.0964 3.80723C17.0602 3.80723 17.5422 4.04819 17.9036 4.16868C18.3855 4.40964 18.747 4.53012 19.1084 4.89157C19.4699 5.25301 19.7108 5.61446 19.8313 6.09639C19.9518 6.45783 20.0723 6.93976 20.1928 7.90362C20.1928 8.98795 20.1928 9.22892 20.1928 12C20.1928 14.7711 20.1928 15.0121 20.1928 16.0964C20.1928 17.0602 19.9518 17.5422 19.8313 17.9036C19.5904 18.3855 19.4699 18.747 19.1084 19.1084C18.747 19.4699 18.3855 19.7108 17.9036 19.8313C17.5422 19.9518 17.0602 20.0723 16.0964 20.1928C15.0121 20.1928 14.7711 20.1928 12 20.1928C9.22892 20.1928 8.98795 20.1928 7.90362 20.1928C6.93976 20.1928 6.45783 19.9518 6.09639 19.8313C5.61446 19.5904 5.25301 19.4699 4.89157 19.1084C4.53012 18.747 4.28916 18.3855 4.16868 17.9036C4.04819 17.5422 3.92771 17.0602 3.80723 16.0964C3.80723 15.0121 3.80723 14.7711 3.80723 12C3.80723 9.22892 3.80723 8.98795 3.80723 7.90362C3.80723 6.93976 4.04819 6.45783 4.16868 6.09639C4.40964 5.61446 4.53012 5.25301 4.89157 4.89157C5.25301 4.53012 5.61446 4.28916 6.09639 4.16868C6.45783 4.04819 6.93976 3.92771 7.90362 3.80723C8.98795 3.80723 9.3494 3.80723 12 3.80723ZM12 2C9.22892 2 8.98795 2 7.90362 2C6.81928 2 6.09639 2.24096 5.49398 2.48193C4.89157 2.72289 4.28916 3.08434 3.68675 3.68675C3.08434 4.28916 2.84337 4.77109 2.48193 5.49398C2.24096 6.09639 2.12048 6.81928 2 7.90362C2 8.98795 2 9.3494 2 12C2 14.7711 2 15.0121 2 16.0964C2 17.1807 2.24096 17.9036 2.48193 18.506C2.72289 19.1084 3.08434 19.7108 3.68675 20.3133C4.28916 20.9157 4.77109 21.1566 5.49398 21.5181C6.09639 21.759 6.81928 21.8795 7.90362 22C8.98795 22 9.3494 22 12 22C14.6506 22 15.0121 22 16.0964 22C17.1807 22 17.9036 21.759 18.506 21.5181C19.1084 21.2771 19.7108 20.9157 20.3133 20.3133C20.9157 19.7108 21.1566 19.2289 21.5181 18.506C21.759 17.9036 21.8795 17.1807 22 16.0964C22 15.0121 22 14.6506 22 12C22 9.3494 22 8.98795 22 7.90362C22 6.81928 21.759 6.09639 21.5181 5.49398C21.2771 4.89157 20.9157 4.28916 20.3133 3.68675C19.7108 3.08434 19.2289 2.84337 18.506 2.48193C17.9036 2.24096 17.1807 2.12048 16.0964 2C15.0121 2 14.7711 2 12 2Z" fill="#A4ABBD"/>
          <path d="M12 6.81928C9.10843 6.81928 6.81928 9.10843 6.81928 12C6.81928 14.8916 9.10843 17.1807 12 17.1807C14.8916 17.1807 17.1807 14.8916 17.1807 12C17.1807 9.10843 14.8916 6.81928 12 6.81928ZM12 15.3735C10.1928 15.3735 8.62651 13.9277 8.62651 12C8.62651 10.1928 10.0723 8.62651 12 8.62651C13.8072 8.62651 15.3735 10.0723 15.3735 12C15.3735 13.8072 13.8072 15.3735 12 15.3735Z" fill="#A4ABBD"/>
          <path d="M17.3012 7.90362C17.9666 7.90362 18.506 7.3642 18.506 6.6988C18.506 6.03339 17.9666 5.49398 17.3012 5.49398C16.6358 5.49398 16.0964 6.03339 16.0964 6.6988C16.0964 7.3642 16.6358 7.90362 17.3012 7.90362Z" fill="#A4ABBD"/>
        `,
        telegram: `
          <path d="M21 4.60223L17.9946 20.2923C17.9946 20.2923 17.5741 21.3801 16.4189 20.8584L9.48458 15.3526L9.45242 15.3364C10.3891 14.4654 17.6524 7.70266 17.9698 7.39612C18.4613 6.92136 18.1562 6.63873 17.5856 6.99736L6.85679 14.053L2.71764 12.6108C2.71764 12.6108 2.06626 12.3708 2.00359 11.8491C1.9401 11.3265 2.73908 11.0439 2.73908 11.0439L19.6131 4.18895C19.6131 4.18895 21 3.55793 21 4.60223V4.60223Z" fill="#A4ABBD"/>
        `,
        twitter: `
          <path d="M22.6 6.89999C21.9 7.19999 21.1 7.4 20.3 7.5C21.1 7 21.8 6.2 22.1 5.3C21.3 5.8 20.5 6.1 19.5 6.3C18.8 5.5 17.7 5 16.6 5C14.4 5 12.6 6.8 12.6 9C12.6 9.3 12.6 9.59999 12.7 9.89999C9.4 9.69999 6.39999 8.1 4.39999 5.7C4.09999 6.3 3.89999 7 3.89999 7.7C3.89999 9.1 4.6 10.3 5.7 11C5 11 4.39999 10.8 3.89999 10.5C3.89999 12.4 5.29999 14.1 7.09999 14.4C6.79999 14.5 6.4 14.5 6 14.5C5.7 14.5 5.5 14.5 5.2 14.4C5.7 16 7.2 17.2 9 17.2C7.6 18.3 5.9 18.9 4 18.9C3.7 18.9 3.4 18.9 3 18.8C4.8 19.9 6.9 20.6 9.2 20.6C16.6 20.6 20.6 14.5 20.6 9.2V8.7C21.4 8.4 22.1 7.69999 22.6 6.89999Z" fill="#A4ABBD"/>
        `,
        youtube: `
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.26249 19.0568C2.87023 18.9408 2.51232 18.7343 2.21896 18.4549C1.9256 18.1754 1.7054 17.8312 1.57695 17.4512C0.842921 15.4874 0.625431 7.28693 2.03911 5.66807C2.50961 5.14145 3.17389 4.81722 3.88777 4.76576C7.68024 4.36768 19.3975 4.42076 20.7432 4.89845C21.1217 5.01832 21.4675 5.22026 21.7547 5.48912C22.0419 5.75799 22.263 6.08681 22.4015 6.45096C23.2035 8.48117 23.2307 15.8589 22.2928 17.8095C22.044 18.3173 21.6275 18.7285 21.1102 18.9772C19.6965 19.6672 5.13833 19.6539 3.26249 19.0568V19.0568ZM9.28422 15.2087L16.0808 11.7587L9.28422 8.28213V15.2087Z" fill="#A4ABBD"/>
        `,
      },
    }
  },

  computed: {
    chosenIcon() {
      return this.icons[this.icon]
    },
  },

  props: {
    icon: String,
    size: String,
    color: String,
  },
}
</script>

<style scoped lang="scss">
.icon{

  svg{
    transition: transform 0.35s ease-in-out;
  }


&.active{
  svg{
    transform: rotate(180deg);
    transition: transform 0.35s ease-in-out;
  }
}
}
</style>