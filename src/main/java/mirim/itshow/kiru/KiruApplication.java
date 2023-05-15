package mirim.itshow.kiru;

import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.service.ItemService;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class KiruApplication {

	private final ItemService itemService;

	public KiruApplication(ItemService itemService) {
		this.itemService = itemService;
	}

	public static void main(String[] args) {
		SpringApplication.run(KiruApplication.class, args);
		//https://prateek-ashtikar512.medium.com/how-to-map-java-enum-to-postgresql-enum-type-fcb3f81a7c42
	}

	@Bean
	public ApplicationRunner init(){
		return args ->{
			itemService.persistNewItem();
			itemService.fetchItem();
		};
	}

}
