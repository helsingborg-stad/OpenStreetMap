<?php

use AcfOpenStreetMap\CacheBust;

class AcfOpenStreetMapField extends acf_field 
{
    public $name;
    public $label;
    public $category;
    public $settings;
    private $cacheBust;

    public function __construct() {
        $this->name = 'open-street-map';
        $this->label = 'OpenStreetMap';
        $this->category = 'basic';
        $this->cacheBust = new CacheBust();
        $this->settings = array(
            'path' => plugin_dir_path(__FILE__),
            'dir' => plugin_dir_url(__FILE__),
        );

        parent::__construct();
    }

    /**
     * Enqueue scripts and styles in the admin
     */
    public function input_admin_enqueue_scripts() {
        wp_register_script(
            'js-test',
            ACFOPENSTREETMAP_URL . '/dist/' .
            $this->cacheBust->name('js/test.js')
        );

        wp_enqueue_script('js-test');

        // wp_enqueue_style('acf-open-street-map', $this->settings['dir'] . 'css/open-street-map.css');
    }

    /**
     * Render the field input
     */
    public function render_field($field) {
        $lat = isset($field['value']['lat']) ? esc_attr($field['value']['lat']) : '';
        $lng = isset($field['value']['lng']) ? esc_attr($field['value']['lng']) : '';

        ?>
        <div class="acf-openstreetmap-container">
            <div class="acf-openstreetmap" data-lat="<?php echo $lat; ?>" data-lng="<?php echo $lng; ?>" style="width: 100%; height: 300px; background: #f0f0f0;">
                <p>Map will be displayed here</p>
            </div>
        </div>
        <?php
    }

    /**
     * Add custom field settings for latitude and longitude
     */
    public function render_field_settings($field) {
        acf_render_field_setting($field, array(
            'label'        => __('Default Latitude', 'acf'),
            'instructions' => __('Set a default latitude', 'acf'),
            'type'         => 'text',
            'name'         => 'default_lat',
        ));

        acf_render_field_setting($field, array(
            'label'        => __('Default Longitude', 'acf'),
            'instructions' => __('Set a default longitude', 'acf'),
            'type'         => 'text',
            'name'         => 'default_lng',
        ));
    }
}

new AcfOpenStreetMapField;