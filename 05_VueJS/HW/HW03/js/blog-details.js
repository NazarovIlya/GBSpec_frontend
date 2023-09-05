

const tg = Vue.component('tags',{
    props: [],

    data() {
        return {
            tags: [
                {name: 'kitchen', active: true},
                {name: 'Bedroom', active: false},
                {name: 'Building', active: false},
                {name: 'Architecture', active: false},
                {name: 'Kitchen Planning', active: false},
            ]
        }
    },

    methods: {
        select: function(name){
            this.tags.forEach(el => {
                el.name == name ? el.active = true : el.active = false;
            });
            this.$emit('tag-selected', name);
        }
    },
    created: function () {
        this.$emit('tag-selected', 'kitchen');
    },
    template: `
    <div class="blog-details-tags">
        <h4>Tags</h4>
        <div class="tags">
        <button @click="select(tag.name)" v-bind:class="tag.active ? 'tag-active' : ''" v-for="tag in tags" :key="tag.id"> {{ tag.name }}</button>
        </div>
    </div>
    `,
});


const bd =  Vue.component("blog-detail", {
    props: ['post'],
    template: `
    <div class="blog-details-post">
        <h2>{{this.post.header}}</h2>
        <p>{{this.post.tag}}</p>
        <div class="img"><img :src="this.post.img" alt="Картинка поста"></div>
        <div v-html="this.post.data"></div>
    </div>
    `,
});


const bl = Vue.component("blog-list", {
    props: ['tag'],
    data() {
        return {
            posts: [
            {header: 'Let’s Get Solution for Building Construction Work', img: '../images/blog1.png', data: '<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.</p><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>', tag: 'kitchen'},
            {header: 'Let’s Get Solution for Building Construction Work', img: '../images/blog1.png', data: '<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.</p><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>', tag: 'Bedroom'},
            {header: 'Let’s Get Solution for Building Construction Work', img: '../images/blog1.png', data: '<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.</p><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>', tag: 'Building'},
            {header: 'Let’s Get Solution for Building Construction Work', img: '../images/blog1.png', data: '<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.</p><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>', tag: 'Architecture'},
            {header: 'Let’s Get Solution for Building Construction Work', img: '../images/blog1.png', data: '<p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable.</p><p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>', tag: 'Bedroom'},
        ]}
    },
    methods: {
        selectPosts: function(){
            return this.posts.filter(el => el.tag == this.tag);     
        }
    },

    template: `
    <div class="blog-details-posts">
        <blog-detail :post="post" v-for="post in selectPosts()" :key="post.id" />
    </div>
    `
});

new Vue({
    el: '#app',
    data: {
        selectedTag: 'kitchen',
        
    },
    methods: {
        setTag: function(tag){
            this.selectedTag = tag;
        }
    }
});
