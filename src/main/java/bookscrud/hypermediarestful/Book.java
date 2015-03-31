package bookscrud.hypermediarestful;

import org.springframework.data.annotation.Id;

public class Book {

	@Id private String id;

	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookAuthour() {
		return bookAuthour;
	}
	public void setBookAuthour(String bookAuthour) {
		this.bookAuthour = bookAuthour;
	}
	private String bookName;
	private String bookAuthour;
	
}
