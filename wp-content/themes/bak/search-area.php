<div id="search-area">
    <form action="/tim-kiem" method="get">
    <h3>Tìm kiếm nâng cao</h3>
    <div class="filter">
        <label>Thương hiệu</label>
        <select id="slBrand" name="slBrand">    
            <option value="-1">--- Tất cả ---</option>
            <?php 
                $brand = -1;
                if(isset($_REQUEST['slBrand'])){
                    $brand = $_REQUEST['slBrand'];
                }
            
                $terms = get_terms( 'brand', array(
                    'hide_empty'=>0
                ));                                                    
                foreach($terms as $term){                
                    $select = ($brand==$term->term_id)?'selected':'';
                    echo '<option '.$select.' value="'.$term->term_id.'">'.$term->name.'</option>';
                }
            ?>
        </select>
    </div>
    
    <div class="filter">
        <label>Model</label> <input type="text" id="txtKey" name="key" value="<?php echo $_REQUEST['key']?>" />
    </div>
    
    <div class="filter">
        <label>Số vùng nấu </label>
        <select id="slNumCook" name="slNumCook">    
            <?php 
                $numCook = -1;
                if(isset($_REQUEST['slNumCook'])){
                    $numCook = $_REQUEST['slNumCook'];
                }
            ?>
            <option value="-1">--- Tất cả ---</option>
            <?php 
                for($i=2; $i<6; $i++){              
                    $select = ($numCook==$i)?'selected':'';
                    echo '<option '.$select.' value="'.$i.'">'.$i.'</option>';
                }
            ?>
        </select>
    </div>

    <div class="filter">        
        <label>Giá:</label> <div id="slider-range"></div>
        <input type="text" id="amount" name="amount" readonly style="border:0; color:#f7930f; font-weight:bold;">     
        <?php 
            $min =  8000000;
            $max = 40000000;
            if(isset($_REQUEST['amount'])){
                $amount = str_replace(',', '', htmlspecialchars($_REQUEST['amount']));
                $tmp = explode(' - ',$amount);
                $min = $tmp[0];
                $max = $tmp[1];        
            }
        echo '<input type="hidden" id="price_start" value="'.$min.'" />';
        echo '<input type="hidden" id="price_end" value="'.$max.'" />';
        ?>
    </div>
    <div class="filter">
        <input type="submit" name="btnSearch" id="btnSearch" value="Tìm sản phẩm" />
    </div>
    </form>
</div>